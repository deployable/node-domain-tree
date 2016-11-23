#!/usr/bin/env bash

set -uexo pipefail

NAME=buildkite-node6
SCOPE=deployable

get_buildkite() {
  wget https://github.com/buildkite/agent/releases/download/v2.3.1/buildkite-agent-linux-amd64-2.3.1.tar.gz
}

build() {
  docker build \
    --build-arg build_proxy=http://10.8.8.8:3142 \
    --file Dockerfile-node-6.9.1 \
    --tag $SCOPE/$NAME \
    .
}

clean(){
  docker rmi $SCOPE/$NAME
}

stop() {
  docker stop $NAME
}

remove() {
  docker rm $NAME
}

run() {
  docker run -e BUILDKITE_AGENT_TOKEN="$BUILDKITE_AGENT_TOKEN" --restart always -d --name $NAME $SCOPE/$NAME
}

ARG=${1:-build}
$ARG
