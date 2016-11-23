from buildkite/agent:latest

ARG build_proxy
ENV DOCKER_BUILD_PROXY=$build_proxy
      
run set -uex;\
    export http_proxy=$DOCKER_BUILD_PROXY;\
    apk update;\
    apk add nodejs make gcc g++

copy buildkite-agent.cfg /buildkite/buildkite-agent.cfg

label co.deployable.distro="alpine" \
      co.deployable.version="1.0" \
      co.deployable.description="Buildkite node agent"

