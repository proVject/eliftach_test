#!/usr/bin/env sh

set -e
cd ./server

git init
git add -A
git commit -m 'deploy'
 git push -f git@github.com:provject/eliftach_test.git master:heroku-server

cd ../../