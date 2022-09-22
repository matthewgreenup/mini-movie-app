# mini-movie-app

## Commands

make postgres container:

`docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres`

open bash for container:

'docker exec -it <PSQL-Container-ID> bash'