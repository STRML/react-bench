# React Server Rendering Benchmark

This repository was created for [react/#812](https://github.com/facebook/react/issues/812).

To run:

```bash
npm install

# Clone react so we can make adjustments
git submodule init git@github.com:facebook/react.git
cd react
npm install

# Link new fbjs transformer
npm install strml/fbjs#hoist_node_env
ln -sf $(pwd)/node_modules/fbjs-scripts $(pwd)/node_modules/fbjs/scripts

# Edit gulpfile; add 'es6.constants' to blacklist.
nano gulpfile.js

# Build react
npm run build

# Ready...
cd ..

# Showtime
node server
```
