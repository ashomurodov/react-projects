import React from "react";

export class TodoForm extends React.Component {
  // const [input, setInput] = useState("");
  // const [list, setList] = useState([]);

  // const handleSubmit = (e) => {
  // 	e.preventDefault();

  // 	(function setListFunc() {
  // 		const newList = {
  // 			id: Math.floor(Math.random() * 1000),
  // 			todo: input,
  // 		};

  // 		setList([...list, newList]);
  // 		console.log([newList, ...list]);
  // 	})();
  // };

  state = {
    todos: [],
  };
  inputRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random() * 1000,
      todo: this.inputRef.current.value,
    };

    this.setState((prevState) => {
      console.log(prevState);
      return { todos: [...prevState.todos, newTodo] };
    });
  };

  render() {
    const todos = this.state.todos;
    console.log(todos);
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <input ref={this.inputRef} type="text" className="todo-input" />
        <button className="todo-btn">submit</button>
      </form>
    );
  }
}
