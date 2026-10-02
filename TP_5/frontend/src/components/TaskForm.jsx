import { useEffect, useState } from 'react'

const initialFormData = {
  projectName: '',
  activityType: '',
  status: '',
  summary: '',
  description: '',
  priority: '',
  reporter: '',
  assignedPerson: '',
  precondition: '',
  creationDate: '',
  closingDate: '',
  sprint: '',
}

function TaskForm({ onAddTask, editingTask, onUpdateTask, onCancelEdit }) {

const [formData, setFormData] = useState(initialFormData)

useEffect(() => {
  if (editingTask) {
    setFormData(editingTask)
  }
}, [editingTask])


   const handleChange = (event) => {
  const { name, value } = event.target

  setFormData((currentFormData) => ({
    ...currentFormData,
    [name]: value,
  }))
}

const validateDates = () => {
  if (!formData.creationDate || !formData.closingDate) {
    return false
  }

  if (!editingTask && formData.creationDate < today) {
    return false
  }

  return formData.closingDate >= formData.creationDate
}

const handleSubmit = async (event) => {

  event.preventDefault()

  if (!validateDates()) {
    alert('Verifique las fechas ingresadas')
    return
  }

  if (editingTask) {
  const taskUpdated = await onUpdateTask(formData)

  if (taskUpdated) {
    setFormData(initialFormData)
  }
} else {
  const taskCreated = await  onAddTask(formData)

  if (taskCreated) {
    setFormData(initialFormData)
  }
}
}

 const handleCancel = () => {
  onCancelEdit()
  setFormData(initialFormData)
}


const today = new Date().toISOString().split('T')[0]

const hasChanges =
  editingTask &&
  Object.keys(initialFormData).some(
    (field) => formData[field] !== editingTask[field]
  )

  return (
    <section>
      <h2>{editingTask ? 'Editar tarea' : 'Nueva tarea'}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="projectName">Nombre del Proyecto</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
           onChange={handleChange}
           required
          />
        </div>

        <div>
          <label htmlFor="activityType">Tipo de Actividad</label>
          <input
            type="text"
            id="activityType"
            name="activityType"
            value={formData.activityType}
            onChange={handleChange}
            required
          />
        </div>

        <div>
  <label htmlFor="description">Descripción</label>
    <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
</div>


<div>
  <label htmlFor="summary">Resumen</label>
  <textarea
    id="summary"
    name="summary"
    value={formData.summary}
    onChange={handleChange}
    required
  />
</div>


<div>
  <label htmlFor="reporter">Informador</label>
  <input
    type="text"
    id="reporter"
    name="reporter"
    value={formData.reporter}
    onChange={handleChange}
    required
  />
</div>


<div>
  <label htmlFor="assignedPerson">Persona asignada</label>
  <input
    type="text"
    id="assignedPerson"
    name="assignedPerson"
    value={formData.assignedPerson}
    onChange={handleChange}
    required
  />
</div>

<div>
  <label htmlFor="priority">Prioridad</label>
  <select
    id="priority"
    name="priority"
    value={formData.priority}
    onChange={handleChange}
    required
  >
    <option value="">Seleccione una prioridad</option>
    <option value="low">Baja</option>
    <option value="medium">Media</option>
    <option value="high">Alta</option>
  </select>
</div>




        <div>
          <label htmlFor="status">Estado</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
        
        <option value="">Seleccione un estado</option>
        <option value="pending">Pendiente</option>
        <option value="inProgress">En progreso</option>
        <option value="completed">Finalizada</option>
  </select>
</div>


<div>
  <label htmlFor="precondition">Precondición</label>
  <textarea
    className="textarea-small"
    id="precondition"
    name="precondition"
    value={formData.precondition}
    onChange={handleChange}
    required
  />
</div>


<div>
  <label htmlFor="sprint">Sprint</label>
  <textarea
    className="textarea-small"
    id="sprint"
    name="sprint"
    value={formData.sprint}
    onChange={handleChange}
    required
  />
</div>

<div>
  <label htmlFor="creationDate">Fecha de Creación</label>
  <input
    type="date"
    id="creationDate"
    name="creationDate"
    value={formData.creationDate}
    onChange={handleChange}
    min={editingTask ? editingTask.creationDate : today}
    required
  />
</div>

<div>
  <label htmlFor="closingDate">Fecha de Cierre</label>
  <input
    type="date"
    id="closingDate"
    name="closingDate"
    value={formData.closingDate}
    onChange={handleChange}
    min={formData.creationDate}
    required
  />
</div>


<button 
  type="submit"
  className="btn-submit"
  disabled={editingTask && !hasChanges}
  >
  {editingTask ? 'Guardar cambios' : 'Crear tarea'}
</button>

{editingTask && (
  <button
    type="button"
    className="btn-cancel"
    onClick={handleCancel}
  >
    Cancelar
  </button>
)}


      </form>
    </section>
  )
}

export default TaskForm