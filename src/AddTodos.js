import React, { Component } from 'react';

class AddTodos extends Component {

    state = {
        content: ''

    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodos(this.state);
        this.setState({
            content: ''
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="content">Content</label>
                    <input type="text" id="content" onChange={this.handleChange} value={this.state.content} />

                    <button>Add Todos</button>
                </form>
            </div>
        )
    }
}

export default AddTodos;
