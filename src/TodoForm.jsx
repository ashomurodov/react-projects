import React from "react";
import "./index.css";
import style from "./todo.module.css";

let counter = 0;
export class TodoForm extends React.Component {
	state = {
		todos: [],
	};
	inputRef = React.createRef();

	handleSubmit = () => {
		const newTodo = {
			id: ++counter,
			todo: this.inputRef.current.value,
		};

		this.setState((prevState) => ({ todos: [...prevState.todos, newTodo] }));

		this.inputRef.current.value = "";
	};

	deleteTodo = (idx) => {
		const filteredTodo = this.state.todos.filter((todo) => todo.id !== idx);
		console.log(filteredTodo);
		this.setState(() => ({ todos: [...filteredTodo] }));
	};

	editTodo = (idx, todoText) => {
		const editedTodo = {
			id: idx,
			todo: todoText,
		};

		const filteredTodo = this.state.todos.filter((todo) => todo.id !== idx);
		filteredTodo.push(editedTodo);
		this.setState(() => ({ todos: [...filteredTodo] }));
	};

	editProps = (idx) => {
		const todo = this.state.todos.find((todo) => todo.id === idx);
		const promptText = prompt("Textni kiriting", `${todo.todo}`);
		this.editTodo(idx, promptText);
	};

	render() {
		const todos = this.state.todos.sort((todo1, todo2) => todo1.id - todo2.id);
		return (
			<div className="container">
				<input ref={this.inputRef} type="text" className="todo-input" />
				<button className="todo-btn" onClick={this.handleSubmit}>
					submit
				</button>
				<div className="todos">
					{todos.map((todo) => (
						<div key={todo.id} className={style.todo}>
							<span className="todoText">{todo.todo}</span>

							<div className={style.btns}>
								<button onClick={() => this.editProps(todo.id)} className="edit">
									edit
								</button>
								<button onClick={() => this.deleteTodo(todo.id)} className={style.delete}>
									delete
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

// state, setState
