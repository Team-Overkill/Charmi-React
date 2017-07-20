UPDATE users
SET
first_name = $2
, age = $3
, height = $4
, home_town = $5
, home_state_id = $6
, geolocation = $7
, about = $8
, work = $9
, school = $10
, relationship_readiness = $11
, age_range = $12
, search_location_radius = $13
, search_hometown = $14
, primary_photo = $15
, auth_token = $16
, gender = $17
WHERE id = $1