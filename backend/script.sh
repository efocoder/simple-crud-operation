#!/bin/bash

pnpm build



echo "starting server"
pnpm start #start:dev

echo "Loading groups"
pnpm seed