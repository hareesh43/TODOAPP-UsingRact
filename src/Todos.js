import React from 'react';

const Todos = (props) => {
    const todos = props.todos;
    const deleteTodos = props.deleteTodos;

    const listTodos = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>

                    <span onClick={() => { deleteTodos(todo.id) }}>{todo.content}</span>
                </div>

            )
        })
    ) :
        (<p className="center" > There is no item to display</p>)



    return (
        <div className="todos collections">
            {listTodos}

        </div>



    )
}
export default Todos;
