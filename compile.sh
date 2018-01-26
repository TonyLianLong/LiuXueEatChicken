#!/bin/bash
set -e # Exit with nonzero exit code if anything fails
rm yarn.lock # this is because taobao registry sometimes causes timeout and we don't really need specific version of packages
yarn install
yarn run build
