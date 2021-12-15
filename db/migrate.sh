#!/bin/bash
echo "dump remote db to migrate-backup.sql"
read -n 1 -s -r -p "Press any key to continue"
ssh smooms "pg_dump -h smooms.cojo00b63jgd.us-east-2.rds.amazonaws.com -p 5432 -Usmooms_admin -d postgres" > migrate-backup.sql
echo "update local db with staging.sql"
read -n 1 -s -r -p "Press any key to continue"
echo "dumping local data"
pg_dump -h localhost -p5432 -U smooms_admin -d smooms > migrate-local-backup.sql
echo "updating local db with remote data"
psql -h localhost -p5432 -U smooms_admin -d smooms < migrate-backup.sql
echo "run cypress tests"
npm run test:e2e:open
echo "migrate local"
psql -h localhost -p5432 -U smooms_admin -d smooms < staging.sql
echo "run cypress tests"
npm run test:e2e:open
echo "migrate remotely"
read -n 1 -s -r -p "Press any key to continue"
ssh smooms "psql -h smooms.cojo00b63jgd.us-east-2.rds.amazonaws.com -p 5432 -Usmooms_admin -d postgres" < staging.sql