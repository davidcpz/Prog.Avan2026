

CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    project_name VARCHAR(150) NOT NULL,
    activity_type VARCHAR(100) NOT NULL,
    status VARCHAR(30) NOT NULL,
    summary VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    priority VARCHAR(20) NOT NULL,
    reporter VARCHAR(100) NOT NULL,
    assigned_person VARCHAR(100) NOT NULL,
    precondition TEXT NOT NULL,
    creation_date DATE NOT NULL,
    closing_date DATE NOT NULL,
    sprint VARCHAR(50) NOT NULL,

    CONSTRAINT check_task_dates
        CHECK (closing_date >= creation_date)
);

