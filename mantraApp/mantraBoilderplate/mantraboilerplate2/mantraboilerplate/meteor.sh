#!/bin/bash
# Meteor wrapper
export MONGO_URL=mongodb://localhost:27017/mantraboilerplate_local
PORT=3010

echo MONGO: $MONGO_URL

if [ "$1" == "" ]; then
    echo "USAGE: ./meteor.sh run [android-device]"
fi

if [ "$1" == "run" ] &&  [ "$2" == "" ]; then
    echo RUNNING: "meteor run --port $PORT --settings settings-local.json"
    meteor npm install
    meteor run --port $PORT
fi

if [ "$1" == "run" ] &&  [ "$2" == "android-device" ]; then
    echo RUNNING: "meteor run android-device --port $PORT --mobile-settings mobile-local.js"
    meteor npm install
    meteor run android-device --port $PORT
fi
