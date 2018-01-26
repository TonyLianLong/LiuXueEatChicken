#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

yarn install
yarn run build
