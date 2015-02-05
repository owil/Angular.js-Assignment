(function(){

	var app = angular.module('todo',[]);
	app.controller('TodoController',function(){
		this.title = 'Todo List';
		this.textInput = '';
		this.todos = ['wes','jusert'];
		this.isControlsShown = false;
		this.showDelete = false;
		this.addItem = function(item){
			if(item.length>0){
				this.todos.push(item);
				this.textInput = '';
			}
		};
		this.toggleControls = function(){
			if(!this.isControlsShown){
				this.isControlsShown = true;
			}else{
				this.isControlsShown = false;
			}
		};
		this.deleteItem = function(item){
			this.todos -= item;
		};
	});

}());