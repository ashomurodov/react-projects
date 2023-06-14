import { useState } from "react";

export default function TodoForm() {
	const [input, setInput] = useState("");
	const [list, setList] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		(function setListFunc() {
			const newList = {
				id: Math.floor(Math.random() * 1000),
				todo: input,
			};

			setList([...list, newList]);
			console.log([newList, ...list]);
		})();
	};

	return (
		<form className="container" onSubmit={handleSubmit}>
			<input
				type="text"
				value={input}
				onChange={(e) => {
					setInput(e.target.value);
					console.log(e.target.value);
				}}
				className="todo-input"
			/>
			<button className="todo-btn">submit</button>
		</form>
	);
}
