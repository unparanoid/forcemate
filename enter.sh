#!/bin/bash

set -e

if [[ $UID != 1000 ]]; then
  echo "WARNING: entering the environment as uid 1000"
fi

mkdir -p build

docker build --tag falsycat:forcemate .
exec docker run --rm -it  \
  --name forcemate  \
  --user 1000:1000  \
  --hostname forcemate  \
  --publish 8080:8080  \
  --env "DISPLAY"  \
  --volume "$PWD/:/repo/"  \
  falsycat:forcemate /bin/bash
