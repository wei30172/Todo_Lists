const app = new Vue ({
	el: '#app',
	data: {
		newTodo: '',
		todoList: []
	},
	methods: {
		addTodo() {
			this.todoList.push({
				title: this.newTodo,
				done: false
			});
			this.newTodo = '';
		},
		deleteTodo(item) {
			let itemIndex = this.todoList.indexOf(item);
			console.log(itemIndex);
			this.todoList.splice(itemIndex, 1);
		},
		allDone() {
			this.todoList.forEach( item => {
				item.done = !item.done;
			});
		},
		allDelete() {
			this.todoList.splice(0);
		}
	}
});