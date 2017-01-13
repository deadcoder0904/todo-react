import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class TodoList  extends Component {
	render() {
		return (
			<ul>
				{this.props.todos.map(todo => (
						<li key={todo.id}>{todo.value}</li>
					))}
			</ul>
		)
	}
}

class Todo extends Component {
	constructor() {
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.state = {todos: [], value: ''}
	}

	handleSubmit(e) {
		e.preventDefault()
		const todo = {
			id: Date.now(),
			value: this.state.value
		}
		this.setState(prevState => ({
			todos: [...(prevState.todos),todo],
			value: ''
		}))
	}

	handleChange(e) {
		this.setState({value: e.target.value})
	}

	render() {
		return (
				<div>
					<h1>Todo React</h1>
					<div id="app">
						<form onSubmit={this.handleSubmit} autoComplete="off">
							<input type="text" name="todo-item" onChange={this.handleChange} value={this.state.value} />
						</form>
						<TodoList todos={this.state.todos} />
					</div>
				</div>
			)
	}
}

ReactDOM.render(<Todo />, document.getElementById('app'));
