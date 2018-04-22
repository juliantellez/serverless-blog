#!/bin/sh

aws dynamodb create-table \
    --cli-input-json file://dynamodb/createTable.json