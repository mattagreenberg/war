DROP TABLE IF EXISTS scores;
DROP TABLE IF EXISTS users;

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

CREATE TABLE users(
  _id varchar PRIMARY KEY NOT NULL,
  username varchar NOT NULL,
  password varchar NOT NULL,
  session_token varchar,
  balance integer NOT NULL
);

ALTER TABLE users OWNER TO bcadmin;

CREATE TABLE scores(
  _id varchar PRIMARY KEY NOT NULL,
  user_id varchar NOT NULL,
  game varchar NOT NULL,
  time_recorded TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  balance integer NOT NULL,
  hands_played integer NOT NULL,
  hands_won integer NOT NULL,
  wars_played integer NOT NULL,
  wars_won integer NOT NULL,
  CONSTRAINT scores_fk0 FOREIGN KEY (user_id) REFERENCES users (_id) 
);

ALTER TABLE scores OWNER TO bcadmin;

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM bcadmin;
GRANT ALL ON SCHEMA public TO bcadmin;
GRANT ALL ON SCHEMA public TO PUBLIC;