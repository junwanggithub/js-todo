/// <reference path="../../typings/tsd.d.ts" />
var TodosService = (function () {
    function TodosService() {
        this.todos = [
            { id: TodosService.__id++, name: 'angular', completed: false },
            { id: TodosService.__id++, name: 'react', completed: false },
            { id: TodosService.__id++, name: 'd3', completed: false }
        ];
        this.a = 'abcde';
    }
    TodosService.prototype.clearCompleted = function () {
        var _this = this;
        var completed = this.todos.filter(function (x) {
            return x.completed;
        });
        completed.forEach(function (x) {
            _this.remove(x);
        });
    };
    TodosService.prototype.remove = function (todo) {
        "use strict";
        var instance = this._find(todo);
        this.todos.splice(this.todos.indexOf(instance), 1);
    };
    TodosService.prototype._find = function (todoId) {
        var filtered = this.todos.filter(function (x) {
            return x.id === todoId;
        });
        return filtered.length ? filtered[0] : null;
    };
    TodosService.prototype.getAll = function () {
        return this.todos;
    };
    TodosService.prototype.add = function (todo) {
        var newTodo = { name: todo, id: ++TodosService.__id, completed: false };
        if (typeof todo === 'object') {
            newTodo = todo;
        }
        this.todos.push(newTodo);
    };
    TodosService.__id = 0;
    return TodosService;
})();
angular.module('TodoApp').service('TodosService', TodosService);
//# sourceMappingURL=TodosService.js.map