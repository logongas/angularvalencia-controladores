app.directive('genericComponent', genericComponent);
function genericComponent() {
    return {
        restrict: 'E',
        scope: {
        },
        priority: 500,
        transclude: true,
        controller: "@",
        link: function (scope, iElement, iAttrs, controller, $transcludeFn) {
            $transcludeFn(scope, function (clone) {
                iElement.append(clone);
            });
        }
    };
}



app.decorator("$controller", function ($delegate, $interpolate, $parse) {

        var originalFn = $delegate;

        newFn = function (expression, locals, later, ident) {

            if ((locals) && (locals.$scope) && (locals.$attrs) && (locals.$element) && (locals.$element.length===1) && (locals.$element[0].nodeName==="GENERIC-COMPONENT") && (!expression)) {
                //Realizar aqui en binding automáticamente de $attrs a $scope           
                bindAttrsToScope(locals.$scope, locals.$attrs, $interpolate, $parse);

                expression=locals.$scope.controllerName;
            }

            return originalFn(expression, locals, later, ident);
        };

        return newFn;
});

function bindAttrsToScope($scope, $attrs, $interpolate, $parse) {
    for (var propertyName in $attrs) {
        if (propertyName.charAt(0) !== "$") {
            bindingAttrToScope($scope, $attrs[propertyName], propertyName, $interpolate, $parse);
        }
    }
}

//initializeDirectiveBindings
function bindingAttrToScope(scope, rawValue, propertyName, $interpolate, $parse) {
    if (isStartAndEndWith(propertyName, "[(", ")]")) {
        var realPropertyName = removeStartAndEnd(propertyName, "[(", ")]");
        var getFn = $parse(rawValue);
        var setFn = $parse(rawValue).assign;

        if (!setFn) {
            throw new Error("La expresion no es asignable:" + rawValue);
        }

        scope[realPropertyName] = getFn(scope.$parent);
        scope.$parent.$watch(function () {
            return getFn(scope.$parent);
        }, function (newVal, oldVal) {
            if (newVal === oldVal) {
                return;
            }
            scope[realPropertyName] = newVal;
        }, true);
        scope.$watch(function () {
            return scope[realPropertyName];
        }, function (newVal, oldVal) {
            if (newVal === oldVal) {
                return;
            }
            setFn(scope.$parent, newVal);
        }, true);


    } else if (isStartAndEndWith(propertyName, "[", "]")) {
        var realPropertyName = removeStartAndEnd(propertyName, "[", "]");
        var getFn = $parse(rawValue);
        scope[realPropertyName] = getFn(scope.$parent);
        scope.$parent.$watch(function () {
            return getFn(scope.$parent);
        }, function (newVal, oldVal) {
            if (newVal === oldVal) {
                return;
            }
            scope[realPropertyName] = newVal;
        }, true);

    } else if (isStartAndEndWith(propertyName, "(", ")")) {
        var realPropertyName = removeStartAndEnd(propertyName, "(", ")");
        var getFn = $parse(rawValue);
        scope[realPropertyName] = function (locals) {
            getFn(scope.$parent, locals);
        };

    } else {
        var realPropertyName = propertyName;
        var templateFn = $interpolate(rawValue);
        scope[realPropertyName] = templateFn(scope.$parent);
        scope.$parent.$watch(function () {
            return templateFn(scope.$parent);
        }, function (newVal) {
            scope[realPropertyName] = newVal;
        });
    }

}

function isStartAndEndWith(s, start, end) {
    if ((s) && (s.length > start.length + end.length)) {
        if ((s.indexOf(start) === 0) && (s.substring(s.length - end.length, s.length) === end)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
function removeStartAndEnd(s, start, end) {
    return s.substring(start.length, s.length - end.length);
}