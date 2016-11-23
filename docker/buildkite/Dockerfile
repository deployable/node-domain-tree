from buildkite/agent:latest
      
run set -uex;\
    apk update;\
    apk add nodejs

copy buildkite-agent.cfg /buildkite/buildkite-agent.cfg

label owner="matt@deployable.co" \
      version="1.0" \
      description="buildkite node agent"

