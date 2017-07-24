SELECT * FROM conversation_list
WHERE user_1 = $1 AND user_2 = $2
OR
user_1 = $2 AND user_2 = $1;