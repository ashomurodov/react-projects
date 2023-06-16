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

	render() {
		const todos = this.state.todos;
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
								<button className="edit">edit</button>
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
