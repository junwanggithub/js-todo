/// <reference path="../../typings/tsd.d.ts" />
interface Todo {
    id: number;
    name: string;
    completed: boolean;
}
class  TodosService {
    static __id = 0;
    todos: Todo[];
    a: string;
    constructor(){
        this.todos = [
            {id: TodosService.__id++, name: 'angular', completed: false},
            {id: TodosService.__id++, name: 'react', completed: false},
            {id: TodosService.__id++, name: 'd3', completed: false}
        ];
        this.a = 'abcde';
    }

    clearCompleted(){
        var completed = this.todos.filter((x) => { return x.completed;});

        completed.forEach((x) => {this.remove(x)});
    }

    remove(todo){
        "use strict";
        var instance = this._find(todo);
        this.todos.splice(this.todos.indexOf(instance), 1);
    }

    private _find(todoId){
        var filtered = this.todos.filter(function(x){
            return x.id === todoId;
        });
        return filtered.length ? filtered[0] : null;
    }

    getAll(){
        return this.todos;
    }

    add(todo){
        var newTodo:Todo = {name:todo, id: ++TodosService.__id, completed: false};
        if(typeof todo === 'object'){
            newTodo = todo;
        }
        this.todos.push(newTodo);
    }
}

angular.module('TodoApp').service('TodosService', TodosService);