AddTodo.$inject = ['TodosService'];

function AddTodo(_todosService){
    "use strict";
    this._todosService = _todosService;
    this.newTaskName = '';
}

AddTodo.prototype.add = function add(){
    "use strict";
    this._todosService.add(this.newTaskName);
    this.newTaskName = '';
};

angular.module('TodoApp')
    .controller('AddTodo', AddTodo)
    .directive('addTodo', function(){
        "use strict";
       return {
           controller: 'AddTodo',
           controllerAs: 'vm',
           template:
           '<form ng-controller="AddTodo" ng-submit="vm.add()">' +
           '	<div class="form-group">' +
           '		<div class="input-group">' +
           '			<span class="input-group-btn">' +
           '				<button type="submit" class="btn btn-primary input-lg">Add</button>' +
           '			</span>' +
           '			<input ng-model="vm.newTaskName" required type="text" class="form-control input-lg" placeholder="Task description..." />' +
           '		</div>' +
           '	</div>' +
           '</form>'
       }
    });

