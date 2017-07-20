Select state_list.state_code, state_list.state_name, users.* from users
JOIN state_list
ON users.home_state_id = state_list.id
WHERE users.id = $1;