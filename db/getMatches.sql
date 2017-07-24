SELECT * FROM matches
WHERE user_1 = $1 AND matched = true
OR
user_2 = $1 AND matched = true;