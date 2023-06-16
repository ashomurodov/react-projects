import React from "react";
import style from "./todo.module.css";

export class Todo extends React.Component {
	render() {
		return (
			<div className={style.todo}>

				<span className="todoText">{this.props.text}</span>

				<div className={style.btns}>
					<button className="edit">edit</button>
					<button className={style.delete}>delete</button>
				</div>

			</div>
		);
	}
}
