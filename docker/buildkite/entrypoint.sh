#!/bin/bash

set -uex

exec /buildkite/bin/buildkite-agent start --bootstrap-script /buildkite/bootstrap.sh --build-path /builds "$@"

