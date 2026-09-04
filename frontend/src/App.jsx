import React from 'react'
import Header from './components/Header'
import FilterButton from './components/FilterButton'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8'>
      <div className='max-w-4xl mx-auto'>
        <Header />

        {/* New Task Button */}
        <div className='flex justify-end mb-4'>
          <button className='px-4 py-2 bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-900 transition'>
            + Add Task
          </button>
        </div>

        <FilterButton />
        <TaskList />
      </div>
      {/* Dark Full Screen Model */}
      {/* Conditional Rendering */}
      <div className='fixed inset-0 bg-black/80 backdrop-blur[10px] flex items-center justify-center z-50'>
          {/* Task Form */}
          <div className='w-full max-w-3xl px-8'>
              <TaskForm />
          </div>
      </div>
    </div>
  )
}

export default App
