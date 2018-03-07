#!/bin/sh

set -ue

rundir=$(cd -P -- "$(dirname -- "$0")" && printf '%s\n' "$(pwd -P)")
canonical="$rundir/$(basename -- "$0")"

if [ -n "${1:-}" ]; then
  cmd=$1
  shift
else
  cmd=build
fi

cd "$rundir"

###

SCOPE="dply"
NAME="node-domain-tree-test"
IMAGE="$SCOPE/$NAME"

build_test_docker(){
  #build_test_docker_version 4
  build_test_docker_version 6 "-q"
  build_test_docker_version 8 "-q" # lts
  build_test_docker_version 9 "-q" # latest
  docker tag $IMAGE:9 $IMAGE:latest
  docker tag $IMAGE:8 $IMAGE:lts
}
build_test_docker_version(){
  build_test_docker_version=${1:-latest}
  build_test_docker_version_args=${2:-}
  docker build \
    $build_test_docker_version_args \
    --build-arg NODE_VERSION=$build_test_docker_version \
    -t $IMAGE:$build_test_docker_version \
    -f test/fixture/Dockerfile \
    . 
}

run_test(){
  docker run $IMAGE:lts
}
run_test_all(){
  build_test_docker
  #docker run $IMAGE:4
  docker run $IMAGE:6
  docker run $IMAGE:8
  docker run $IMAGE:9
}

###

run_help(){
  echo "Commands:"
  awk '/  ".*"/{ print "  "substr($1,2,length($1)-3) }' make.sh
}
set +x
case $cmd in
  "build")                  build_test_docker "$@";;
  "build:test")             build_test_docker "$@";;
  "build:test:docker")      build_test_docker "$@";;
  "test")                   run_test "$@";; 
  "test:all")               run_test_all "$@";; 
  "test:lts")               run_test_lts "$@";; 
  "test:latest")            run_test_latest "$@";; 
  "watch")                  run_watch "$@";;

  '-h'|'--help'|'h'|'help') run_help;;
  *)                        $cmd "$@";;
esac

