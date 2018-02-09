'use strict'

const Task = require('shell-task')

new Task('sleep 1000')
    .then('git config user.name "Fea-Sin"')
    .then('git config user.email "1210992614@qq.com"')
    .then('git add .')
    .then('sleep 1000')
    .then('git commit -m "modify gitignore"')
    .then('git push -u origin master')
    .run(function(err, next) {
      if (err) {
        // do something you should do
      } else {
        console.log('done')
      }
    })
