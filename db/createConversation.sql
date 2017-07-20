INSERT INTO conversation_list
(user_1, user_2)
VALUES($1, $2)
RETURNING *;