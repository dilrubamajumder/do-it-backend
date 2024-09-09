DROP DATABASE IF EXISTS do_it;
CREATE DATABASE do_it;

\c do_it;

DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
    id SERIAL primary key,
    task TEXT NOT NULL,
    due_date date,
    status VARCHAR(50) DEFAULT 'pending'
);
