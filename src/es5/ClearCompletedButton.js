angular.module('TodoApp')
        .directive('clearCompleted', ['TodosService', function(TodosService){
        "use strict";
        return {
            restrict: 'A',
            link: function(scope, element){
                element.on('click', function(){
                   TodosService.clearCompleted();
                    scope.$apply();
                });

            }
        }
    }]);