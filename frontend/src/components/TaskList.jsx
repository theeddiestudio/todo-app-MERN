import React from 'react'
import TaskItem from './TaskItem'

function TaskList() {
  return (
    <div className='space-y-4'>
        {/* WE will use Map Method */}
        <TaskItem />
    </div>
  )
}

export default TaskList
