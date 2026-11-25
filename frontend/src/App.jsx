import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import FilterButton from './components/FilterButton'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Stats from './components/Stats'

import {createTaskAPI, updateTaskAPI, deleteTaskAPI, fetchTaskAPI, toggleTaskAPI} from './api/fetchTask'

function App() {

  // States
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({title: '', description: ''});
  const [editTask, setEditTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);

  const fetchTasks = async () => {
    try{
      setLoading(true);
      const data = await fetchTaskAPI();
      setTasks(data);
    } catch(e) {
      console.log("Error Fetching Data", e);
    } finally {
      setLoading(false);
    }
  };

  const createTask = async () => {
    if (!newTask.title.trim()) return;

    try{
      const data = await createTaskAPI(newTask);
      setTasks([data, ...tasks]);
      setNewTask({title:"", description:""});
      setShowForm(false);
    } catch(e) {
      console.log("Error Fetching Data", e);
    }
  };

  const updateTask = async (id, updates) => {
    try{
      const data = await updateTaskAPI(id, updates);
      setTasks(tasks.map((t) => (t._id === id ? updates : t)));
      setEditTask(null);
    } catch(e) {
      console.log("Error Fetching Data", e);
    }
  };

  const deleteTask = async (id) => {
    try{
      await deleteTaskAPI(id);
      setTasks(tasks.filter((t) => (t._id !== id)));
    } catch(e) {
      console.log("Error Fetching Data", e);
    }
  };

  const toggleTask = async (id) => {
    try{
      const updated = await toggleTaskAPI(id);
      setTasks(tasks.map((t) => (t._id === id ? updated : t)));
    } catch(e) {
      console.log("Error Fetching Data", e);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'completed') return t.isCompleted;
    if (filter === 'pending') return !t.isCompleted;
    return true;
  }).sort((a,b) => {
    if (a.isCompleted !== b.isCompleted) {
      return a.isCompleted ? 1 : -1;
    }
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.isCompleted).length,
    pending: tasks.filter((t) => !t.isCompleted).length,
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8'>
      <div className='max-w-4xl mx-auto'>
        <Header />

        <Stats {...stats} />

        {/* New Task Button */}
        <div className='flex justify-end mb-4'>
          <button className='px-4 py-2 bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-900 transition' onClick={() => setShowForm(true)}>
            + Add Task
          </button>
        </div>

        <FilterButton filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          loading={loading}
          editingTask={editTask}
          setEditing={setEditTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      </div>
      {/* Dark Full Screen Model */}
      {/* Conditional Rendering */}
      { showForm && (
        <div className='fixed inset-0 bg-black/80 backdrop-blur[10px] flex items-center justify-center z-50'>
          {/* Task Form */}
          <div className='w-full max-w-3xl px-8'>
              <TaskForm newTask={newTask} setNewTask={setNewTask} onAdd={createTask} onCancel={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
