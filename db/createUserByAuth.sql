-- db obj
INSERT INTO users
(id, auth_token, first_name, primary_photo)
VALUES(DEFAULT, $1, $2, $3)
RETURNING *;