function TaskList({ tasks, onDeleteTask, onCompleteTask, onEditTask }) {

  const statusLabels = {
  pending: 'Pendiente',
  inProgress: 'En progreso',
  completed: 'Finalizada',
}

const priorityLabels = {
  low: 'Baja',
  medium: 'Media',
  high: 'Alta',
}

  return (



    <section>
      <h2>Listado de Tareas</h2>

      {tasks.length === 0 ? (
        <p>No hay tareas cargadas.</p>
      ) : (
        <div>
          {tasks.map((task) => (
            <article key={task.id}>
              <h3>{task.projectName}</h3>

              <p>{task.summary}</p>

              <p>Estado: {statusLabels[task.status]}</p>

              <p>Prioridad: {priorityLabels[task.priority]}</p>

            <button
              type="button"
              className="btn-edit"
              onClick={() => onEditTask(task)}
            >
              Editar
            </button>

            <button
              type="button"
              className="btn-complete"
              onClick={() => onCompleteTask(task.id)}
              disabled={task.status === 'completed'}
            >
            {task.status === 'completed' ? 'Finalizada' : 'Finalizar'}
            </button>

            <button   
              type="button"
              className="btn-delete"
              onClick={() => onDeleteTask(task.id)}
          >
            Eliminar
            </button>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default TaskList







