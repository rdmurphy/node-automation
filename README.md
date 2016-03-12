# Automating Your Work with Node.js

Hello! This is the repo for the NICAR 2016 course "[Building tools and automation for Node.js](http://www.ire.org/events-and-training/event/2198/2452/)". We will be walking through setting up your own static site build tool with [gulp.js](http://gulpjs.com/).

There will be a snapshot of its beginning state in the `beginning` branch &mdash; the `master` branch reflects the end result.

## What you need

- [Node.js](https://nodejs.org/en/) &mdash; version 4 or greater
- npm &mdash; typically comes installed with Node.js

## What your tool will be able to do

- Automatically reload when you make changes to your code
- Concatinate your CSS, alters it to include common [browser vendor prefixes](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix), and minify
- Concatinate your JavaScript, check it for errors, and minify
- Make your image files smaller
- Prepare your files for deployment

## On the agenda

— Install all the things!
- What is gulp?
- Writing your first gulp task
- Setting up auto-reloading with BrowserSync
- Concatinating your CSS
- Minifying your CSS
— Autoprefixing your CSS
- Concatinating your JavaScript
— Linting your JavaScript
— Minifying your JavaScript
— Minifying your images
— Putting it all together
