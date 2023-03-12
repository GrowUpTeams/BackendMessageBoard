-- @block
CREATE TABLE message (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NULL,
    title VARCHAR(50) NULL,
    create_time BIGINT NULL
);