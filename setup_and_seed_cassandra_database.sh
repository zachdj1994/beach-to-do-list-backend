#!/usr/bin/env bash
docker pull cassandra:latest
docker network create cassandra
docker run --rm -d --name cassandra --hostname cassandra --network cassandra cassandra
docker run --rm --network cassandra -v "$(pwd)/cassandra_data.cql:/scripts/cassandra_data.cql" -e CQLSH_HOST=cassandra -e CQLSH_PORT=9042 -e CQLVERSION=3.4.5 nuvo/docker-cqlsh
