import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {

  const [tasks, setTasks] = useState([])

  const [editingTask, setEditingTask] = useState(null)

  useEffect(() => {
  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3001/tasks')

if (!response.ok) {
  throw new Error('Error al obtener las tareas')
}

const data = await response.json()

setTasks(data)
    } catch (error) {
      console.error('Error loading tasks:', error)
    }
  }

  fetchTasks()
}, [])

const handleAddTask = async (newTask) => {
  const taskExists = tasks.some(
    (task) =>
      task.projectName.trim().toLowerCase() ===
        newTask.projectName.trim().toLowerCase() &&
      task.summary.trim().toLowerCase() ===
        newTask.summary.trim().toLowerCase()
  )

  if (taskExists) {
    alert('La tarea ya existe en este proyecto')
    return false
  }

  try {
    const response = await fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })

    if (!response.ok) {
      throw new Error('Error al crear la tarea')
    }

    const createdTask = await response.json()

    setTasks((currentTasks) => [...currentTasks, createdTask])

    return true
  } catch (error) {
    console.error('Error creating task:', error)
    alert('No se pudo crear la tarea')

    return false
  }
}

const handleDeleteTask = async (taskId) => {
  try {
    const response = await fetch(
      `http://localhost:3001/tasks/${taskId}`,
      {
        method: 'DELETE',
      }
    )

    if (!response.ok) {
      throw new Error('Error al eliminar la tarea')
    }

   setTasks((currentTasks) =>
  currentTasks.filter((task) => task.id !== taskId)
)
  } catch (error) {
    console.error('Error deleting task:', error)
    alert('No se pudo eliminar la tarea')
  }
}


const handleCompleteTask = async (taskId) => {
  try {
    const response = await fetch(
      `http://localhost:3001/tasks/${taskId}/complete`,
      {
        method: 'PATCH',
      }
    )

    if (!response.ok) {
      throw new Error('Error al finalizar la tarea')
    }

    const completedTask = await response.json()

   setTasks((currentTasks) =>
  currentTasks.map((task) =>
    task.id === completedTask.id
      ? completedTask
      : task
  )
)
  } catch (error) {
    console.error('Error completing task:', error)
    alert('No se pudo finalizar la tarea')
  }
}

    const handleEditTask = (task) => {
  setEditingTask(task)
}

const handleCancelEdit = () => {
  setEditingTask(null)
}

const handleUpdateTask = async (updatedTask) => {
  try {
    const response = await fetch(
      `http://localhost:3001/tasks/${updatedTask.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      }
    )

    if (!response.ok) {
      throw new Error('Error al actualizar la tarea')
    }

    const taskUpdated = await response.json()

    setTasks((currentTasks) =>
  currentTasks.map((task) =>
    task.id === taskUpdated.id
      ? taskUpdated
      : task
  )
)

    setEditingTask(null)

    return true
  } catch (error) {
    console.error('Error updating task:', error)
    alert('No se pudo actualizar la tarea')

    return false
  }
}

  return (
    <main>
      <h1>Gestor de Tareas</h1>
      <TaskForm 
          onAddTask={handleAddTask}
          editingTask={editingTask}
          onUpdateTask={handleUpdateTask}
          onCancelEdit={handleCancelEdit}
          
       />
      <TaskList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onCompleteTask={handleCompleteTask}
          onEditTask={handleEditTask}
    />
    </main>
  )
}

export default App





