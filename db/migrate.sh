#!/bin/bash
echo -e "dump remote db to migrate-backup.sql\n"
read -n 1 -s -r -p "Press any key to continue"
echo -e "\n"
ssh smooms "pg_dump -h smooms.cojo00b63jgd.us-east-2.rds.amazonaws.com -p 5432 -Usmooms_admin -d postgres" > migrate-backup.sql
echo -e "update local db with staging.sql\n"
read -n 1 -s -r -p "Press any key to continue"
echo -e "\n"
echo -e "dumping local data\n"
pg_dump -h localhost -p5432 -U smooms_admin -d smooms > migrate-local-backup.sql
echo -e "delete local data\n"
read -n 1 -s -r -p "Press any key to continue"
echo -e "\n"
dropdb smooms -h localhost -p5432 -Usmooms_admin
echo -e "create new db\n"
createdb smooms -h localhost -p5432 -Usmooms_admin
echo -e "updating local db with remote data\n"
psql -h localhost -p5432 -U smooms_admin -d smooms < migrate-backup.sql
echo -e "run cypress tests\n"
npm run test
echo -e "migrate local\n"
psql -h localhost -p5432 -U smooms_admin -d smooms < staging.sql
echo -e "run cypress tests\n"
npm run test
echo -e "migrate remotely\n"
read -n 1 -s -r -p "Press any key to continue"
echo -e "\n"
#ssh smooms "psql -h smooms.cojo00b63jgd.us-east-2.rds.amazonaws.com -p 5432 -Usmooms_admin -d postgres" < staging.sql