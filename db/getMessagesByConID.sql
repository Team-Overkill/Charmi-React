SELECT users.first_name,  messages.* FROM messages
JOIN users
ON users.id = messages.user_id
WHERE conversation_id = $1
order by time asc;