TodosService.__id = 0;

function TodosService(){
    "use strict";
    this.todos = [
        {id: TodosService.__id++, name: 'angular', completed: false},
        {id: TodosService.__id++, name: 'react', completed: false},
        {id: TodosService.__id++, name: 'd3', completed: false}
    ];
}

TodosService.prototype.add = function add(todo){
    "use strict";
    var newTodo = {name:todo};
    if(typeof todo === 'object'){
        newTodo = todo;
    }
    newTodo.id = ++TodosService.__id;
    newTodo.completed = false;

    this.todos.push(newTodo);
};

TodosService.prototype.clearCompleted = function clearCompleted(){
    "use strict";
    var completed = this.todos.filter(function(x){
       return x.completed;
    });

    var _this = this;
    completed.forEach(function(x){
        _this.remove(x);
    });
};

TodosService.prototype.getAll = function getAll(){
    "use strict";
    return this.todos;
};

TodosService.prototype.remove = function remove(todo){
    "use strict";
    var instance = this._find(todo);
    this.todos.splice(this.todos.indexOf(instance), 1);
};

TodosService.prototype._find = function _find(todoId){
    "use strict";
    var filtered = this.todos.filter(function(x){
        return x.id === todoId;
    });
    return filtered.length ? filtered[0] : null;
};

angular.module('TodoApp').service('TodosService', TodosService);
