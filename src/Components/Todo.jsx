import '../CSS/todo.css'

const Todo = ({addTodo, titleInput, descInput, setTitleInput, setDescInput}) => {
    return ( 
        <div className="todo-card">
            <label htmlFor="title">Title:</label>
            <input value={titleInput} onChange={(e) => setTitleInput(e.target.value)} type="text" name='title' placeholder='Title...' id='title' className='todo-card-input' />

            <label htmlFor="description">Description:</label>
            <input value={descInput} onChange={(e) => setDescInput(e.target.value)} type="text" name='description' placeholder='Description...' id='description' className='todo-card-input' />
            <button onClick={addTodo} className='todo-add-btn'>Add</button>
        </div>
     );
}
 
export default Todo;