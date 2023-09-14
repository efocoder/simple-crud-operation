#!/bin/bash

pnpm build

echo "Loading groups"
pnpm seed

echo "starting server"
pnpm start #start:dev

