#!/usr/bin/env bash
psql -U $USER -p 5432 -f postgresql_create_db.sql && psql -U $USER -d to_do_list -p 5432 -f postgresql_create_tables.sql
