import React from 'react'
import EditTaskForm from './EditTaskForm'
import { Check, Edit2, Trash2 } from 'lucide-react'

function TaskItem() {
  return (
    <div className={`bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 transition duration-200 hover:shadow-xl hover:border-gray-600`}>
        {/* Conditional Rendering */}
        <EditTaskForm />
        {/* Else */}
        <div className='flex items-center justify-between'>
            {/* Left side checkbox + Details */}
            <div className='flex items-start space-x-3 flex-1'>
                {/* Toggle Completion */}
                <button className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-duration-200`}>
                    <Check size={16} />
                </button>

                {/* Task Info */}
                <div className='flex-1'>
                    <h3 className={`text-lg font-medium`}>Task Title</h3>
                    <p className={`mt-1`}>Task Description</p>
                    {/* Timestamps */}
                    <p className='text-sm text-gray-500 mt-2'>
                        Created: Date
                    </p>
                </div>
            </div>

            {/* Rightside Actions */}
            <div className='flex items-center space-x-2 ml-4'>
                {/* Edit Button */}
                <button className='p-2 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition duration-200'>
                    <Edit2 size={18} />
                </button>
                {/* Delete Button */}
                <button className='p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition duration-200'>
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default TaskItem
