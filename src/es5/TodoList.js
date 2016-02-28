TodoList.$inject = ['TodosService'];

function TodoList(_todosService){
    "use strict";
    this._todosService = _todosService;
    this.todos = [];
    this.loadTodos();
}

TodoList.prototype.loadTodos = function loadTodos(){
    "use strict";
    this.todos = this._todosService.getAll();
};

TodoList.prototype.remove = function remove(todo){
    "use strict";
    this._todosService.remove(todo);
}

angular.module('TodoApp')
        .controller('TodoList', TodoList)
        .directive('todoList', function(){
            "use strict";
            return {
                scope: {},
                controller: 'TodoList',
                controllerAs: 'vm',
                template: '' +
                '<ul ng-controller="TodoList" class="list-group">' +
                '    <li ng-repeat="todo in vm.todos" class="list-group-item">' +
                '        <div class="input-lg">' +
                '            <input type="checkbox" ng-model="todo.completed" />' +
                '            <span ng-class="{ \'text-strikethrough\': todo.completed }">{{todo.name}}</span>' +
                '            <i ng-click="vm.remove(todo)" class="delete glyphicon glyphicon-remove-circle pull-right" title="Remove"></i>' +
                '        </div>' +
                '    </li>' +
                '</ul>'
            };
        });