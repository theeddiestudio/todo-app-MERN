import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, loading, editingTask, setEditing, updateTask, deleteTask, toggleTask}) {

  if(loading) {
    return (
      <div className='text-center'>
        <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-500'></div>
        <p>Loading</p>
      </div>
    );
  }

  if(tasks.length === 0) {
    return (
      <div className='text-center py-8'>
        <p className='text-gray-400 text-lg'>Nothing Found!</p>
        <p className='text-gray-400 text-lg'>Add New Task</p>
      </div>
    );
  }

  return (
    <div className='space-y-4'>
        {tasks.map((task) => {
          return <TaskItem key={task._id} task={task} editingTask={editingTask} setEditing={setEditing} updateTask={updateTask}
          deleteTask={deleteTask}
          toggleTask={toggleTask} />;
        })}
    </div>
  )
}

export default TaskList
