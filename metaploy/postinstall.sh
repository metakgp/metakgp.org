#!/bin/bash

cleanup() {
    echo "Container stopped. Removing nginx configuration."
    rm /etc/nginx/sites-enabled/PROJECT_NAME.metaploy.conf
}

trap 'cleanup' SIGQUIT SIGTERM SIGHUP

"${@}" &

cp ./PROJECT_NAME.metaploy.conf /etc/nginx/sites-enabled

wait $!
