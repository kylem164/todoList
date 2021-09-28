import React from 'react'
import Todo from './Todo'
export default function PostList ({todos = []}) {
    return (
    <div>
        {todos.map((p, i) => <Todo {...p} key={'todo-' + i} />)}
    </div> )}