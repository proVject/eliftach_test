#!/usr/bin/env sh

set -e
cd ./client
npm run build
cd dist

git init
git add -A
git commit -m 'deploy'
 git push -f git@github.com:provject/eliftach_test.git master:gh-pages

cd ../../