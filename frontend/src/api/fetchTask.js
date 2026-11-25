const API_BASE_URL = "http://localhost:3000/api/v2";

export const fetchTaskAPI = async () => {
    const results = await fetch(`${API_BASE_URL}/todos`);
    if (!results.ok) throw new Error('Failed to fetch tasks');
    return results.json();
};

export const createTaskAPI = async (task) => {
    const results = await fetch(`${API_BASE_URL}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(task),
    });
    if (!results.ok) throw new Error('Failed to create task');
    return results.json();
}

export const updateTaskAPI = async (id, updates) => {
    const results = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(updates),
    });
    if (!results.ok) throw new Error('Failed to update task');
    return results.json();
}

export const deleteTaskAPI = async (id) => {
    const results = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: 'DELETE',
    });
    if (!results.ok) throw new Error('Failed to delete task');
    return results.json();
}

export const toggleTaskAPI = async (id) => {
    const results = await fetch(`${API_BASE_URL}/todos/${id}/toggle`, {
        method: 'PATCH',
    });
    if (!results.ok) throw new Error('Failed to toggle task');
    return results.json();
}