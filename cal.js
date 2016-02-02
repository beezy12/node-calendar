#!/usr/bin/env node


// this is now the main entry point. it turns everything into es5 using babel.
'use strict'

require('babel-register');
require('./lib/cli');
