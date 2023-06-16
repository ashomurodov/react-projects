import React from "react";
import "./index.css";
import { Todo } from "./todo";

export class TodoForm extends React.Component {
	state = {
		todos: [],
	};
	inputRef = React.createRef();

	handleSubmit = () => {
		const newTodo = {
			id: Math.random() * 1000,
			todo: this.inputRef.current.value,
		};

		this.setState((prevState) => ({ todos: [...prevState.todos, newTodo] }));

		this.inputRef.current.value = "";
	};

	render() {
		const todos = this.state.todos;
		console.log("todos: ", todos);
		return (
			<div className="container">
				<input ref={this.inputRef} type="text" className="todo-input" />
				<button className="todo-btn" onClick={this.handleSubmit}>
					submit
				</button>
				<div className="todos">
					{todos.map((todo) => (
						<Todo key={todo.id} text={todo.todo} />
					))}
				</div>
			</div>
		);
	}
}

// state, setState
