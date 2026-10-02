import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { pool } from './db.js'


const app = express()
const PORT = process.env.PORT || 3001

const validateTask = (task, isCreating = false) => {
  const {
    projectName,
    activityType,
    status,
    summary,
    description,
    priority,
    reporter,
    assignedPerson,
    precondition,
    creationDate,
    closingDate,
    sprint,
  } = task

  if (
    !projectName ||
    !activityType ||
    !status ||
    !summary ||
    !description ||
    !priority ||
    !reporter ||
    !assignedPerson ||
    !precondition ||
    !creationDate ||
    !closingDate ||
    !sprint
  ) {
    return 'Todos los campos son obligatorios'
  }

if (isCreating) {
  const today = new Date().toISOString().split('T')[0]

  if (creationDate < today) {
    return 'La fecha de creación no puede ser anterior a la fecha actual'
  }
}


  if (closingDate < creationDate) {
    return 'La fecha de cierre no puede ser anterior a la fecha de creación'
  }

  if (!['pending', 'inProgress', 'completed'].includes(status)) {
  return 'El estado de la tarea no es válido'
}

if (!['low', 'medium', 'high'].includes(priority)) {
  return 'La prioridad de la tarea no es válida'
}

  return null
}

const isValidId = (id) => {
  const numericId = Number(id)

  return Number.isInteger(numericId) && numericId > 0
}


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'API Gestor de Tareas funcionando' })
})

app.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query(`
  SELECT
    id,
    project_name AS "projectName",
    activity_type AS "activityType",
    status,
    summary,
    description,
    priority,
    reporter,
    assigned_person AS "assignedPerson",
    precondition,
    creation_date::text AS "creationDate",
    closing_date::text AS "closingDate",
    sprint
  FROM tasks
  ORDER BY id
`)

    res.json(result.rows)
  } catch (error) {
    console.error('Error getting tasks:', error.message)

    res.status(500).json({
      error: 'Error al obtener las tareas',
    })
  }
})


app.post('/tasks', async (req, res) => {
  try {
    const {
      projectName,
      activityType,
      status,
      summary,
      description,
      priority,
      reporter,
      assignedPerson,
      precondition,
      creationDate,
      closingDate,
      sprint,
    } = req.body

    const validationError = validateTask(req.body, true)

if (validationError) {
  return res.status(400).json({
    error: validationError,
  })
}

const result = await pool.query(
  `INSERT INTO tasks (
    project_name,
    activity_type,
    status,
    summary,
    description,
    priority,
    reporter,
    assigned_person,
    precondition,
    creation_date,
    closing_date,
    sprint
  )
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
  RETURNING
    id,
    project_name AS "projectName",
    activity_type AS "activityType",
    status,
    summary,
    description,
    priority,
    reporter,
    assigned_person AS "assignedPerson",
    precondition,
    creation_date AS "creationDate",
    closing_date AS "closingDate",
    sprint`,
  [
    projectName,
    activityType,
    status,
    summary,
    description,
    priority,
    reporter,
    assignedPerson,
    precondition,
    creationDate,
    closingDate,
    sprint,
  ]
)

res.status(201).json(result.rows[0])


  } catch (error) {
    console.error('Error creating task:', error.message)

    res.status(500).json({
      error: 'Error al crear la tarea',
    })
  }
})




app.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params

    if (!isValidId(id)) {
  return res.status(400).json({
    error: 'El ID de la tarea no es válido',
  })
}

    const {
      projectName,
      activityType,
      status,
      summary,
      description,
      priority,
      reporter,
      assignedPerson,
      precondition,
      creationDate,
      closingDate,
      sprint,
    } = req.body

    const validationError = validateTask(req.body)

if (validationError) {
  return res.status(400).json({
    error: validationError,
  })
}



   const result = await pool.query(
  `UPDATE tasks
   SET project_name = $1,
       activity_type = $2,
       status = $3,
       summary = $4,
       description = $5,
       priority = $6,
       reporter = $7,
       assigned_person = $8,
       precondition = $9,
       creation_date = $10,
       closing_date = $11,
       sprint = $12
   WHERE id = $13
   RETURNING
       id,
       project_name AS "projectName",
       activity_type AS "activityType",
       status,
       summary,
       description,
       priority,
       reporter,
       assigned_person AS "assignedPerson",
       precondition,
       creation_date::text AS "creationDate",
       closing_date::text AS "closingDate",
       sprint`,
  [
    projectName,
    activityType,
    status,
    summary,
    description,
    priority,
    reporter,
    assignedPerson,
    precondition,
    creationDate,
    closingDate,
    sprint,
    id,
  ]
)

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: 'Tarea no encontrada',
      })
    }

    res.json(result.rows[0])
  } catch (error) {
    console.error('Error updating task:', error.message)

    res.status(500).json({
      error: 'Error al actualizar la tarea',
    })
  }
})


app.patch('/tasks/:id/complete', async (req, res) => {
  try {
    const { id } = req.params

    if (!isValidId(id)) {
  return res.status(400).json({
    error: 'El ID de la tarea no es válido',
  })
}

    const result = await pool.query(
  `UPDATE tasks
   SET status = $1
   WHERE id = $2
   RETURNING
     id,
     project_name AS "projectName",
     activity_type AS "activityType",
     status,
     summary,
     description,
     priority,
     reporter,
     assigned_person AS "assignedPerson",
     precondition,
     creation_date::text AS "creationDate",
     closing_date::text AS "closingDate",
     sprint`,
  ['completed', id]
)

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: 'Tarea no encontrada',
      })
    }

    res.json(result.rows[0])
  } catch (error) {
    console.error('Error completing task:', error.message)

    res.status(500).json({
      error: 'Error al finalizar la tarea',
    })
  }
})



app.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params

    if (!isValidId(id)) {
  return res.status(400).json({
    error: 'El ID de la tarea no es válido',
  })
}

    const result = await pool.query(
      `DELETE FROM tasks
       WHERE id = $1
       RETURNING *`,
      [id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: 'Tarea no encontrada',
      })
    }

    res.json({
      message: 'Tarea eliminada correctamente',
      task: result.rows[0],
    })
  } catch (error) {
    console.error('Error deleting task:', error.message)

    res.status(500).json({
      error: 'Error al eliminar la tarea',
    })
  }
})


pool.query('SELECT NOW()')
  .then(() => {
    console.log('Connected to Postgres')
  })
  .catch((error) => {
    console.error('Error connecting to Postgres:', error.message)
  })


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})