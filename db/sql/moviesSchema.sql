-- SET UP SCHEMA HERE

-- debating whether to store all of the required information for each "favorite" title, or simply the tmdb_id, to query them for all the info
-- thinking it would be a quicker simpler operation to have all of the required information to render favorites stored within the database
-- then the columns/info I'd want for each entry:

-- local_id, tmdb_id, title, poster image source, popularity, release,

-- thinking just the one table would do it, and without any officially foreign ids, there will be none here that reference another table in this database, though the tmdb id could be interpreted as a foreign id
