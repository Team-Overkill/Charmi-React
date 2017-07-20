INSERT INTO messages
(message, time, conversation_id, user_id)
VALUES($1, $2, $3, $4)
RETURNING *;