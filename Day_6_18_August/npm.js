// Creating your first project 

// In Node you typically create a project 
// For eg. a web application is one project 
// Entry point - index.js


project
-- index.js
-- package.json
-- maths/
-- maths/constants.js
-- maths/operators.js 

// package.json
// JSON representation of application and its dependencies
// contains author name, project name, version


// npm init 
// npm = Node Package Manager
// Interactively setup package.json

// scripts in package.json
// start : which is shorthand for 

// Packages and NPM 

// Module - one file = one module

// Package/Library = one or more related modules packaged together

// For eg. 
// Maths
    - trig.js
    - log.js
    - integers.js


// Lots of packages already 
//- so you don't need to rebuild functionality 
//- just use one of the packages


// Where to find these packages : Central Repository : npmjs.com
// eg. https://momentjs.com/


// babel
// react
// moments




// How to install packages - Node Package Manager
// Already installed (when you install node)


// Let's install moment


npm install moment --save

// Installed moment locally for this project

// Two things
// 1. "npm install moment" - will install moment for this project i.e. local install 
// 2. "--save" - will add moment as a dependency in package.json

// TODO : npm init for dependencies? 


// Local Install
// Default
// In a directory called node_modules/ ... 
// .gitignore it 
// Anybody who wants to use your app .... npm install 


// Try out npm install 
// How to require any module : based on documentation

// How to use?
// require
// lookup order of require  - if no path specified

Read : https://www.bennadel.com/blog/2169-where-does-node-js-and-require-look-for-modules.htm

// TODO : Lookup and Discuss "FC" pattern of moment, express etc

1. core modules (http, fs, sys, path, events)
2. ./node_modules/ , parent, grandparent ...
4. require.paths array 



// fs - Todo Buffer 
// Hands - On 
// https://momentjs.com/


// Global Install 

// Install a module system-wide
// would be available to all projects then

npm install -g webpack 

// npm list -global
// npm uninstall (-g) webpack 


//TODO :  Dev Dependences
// --save vs --save-dev (eg. Babel )





 
