# ASEPairProgramming-HW1

# Static Analysis Results (jslint)

dyn-160-39-205-47:ASEPairProg akankshagupta$ meteor lint

While linting files with jshint for the app (Server):
lib/route.js:19:5: 'concise methods' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).
lib/route.js:29:9: 'concise methods' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).
lib/route.js:36:5: 'concise methods' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).
lib/route.js:43:5: 'concise methods' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).
lib/route.js:11:47: 'redirect' is defined but never used.
lib/route.js:11:38: 'context' is defined but never used.
collections/Notes.js:51:35: Missing semicolon.
collections/Notes.js:63:35: Missing semicolon.
collections/Notes.js:1:1: 'Notes' is not defined.
collections/Notes.js:3:1: 'Notes' is not defined.
collections/Notes.js:12:1: 'bullet' is not defined.
collections/Notes.js:21:1: 'NotesSchema' is not defined.
collections/Notes.js:34:16: 'bullet' is not defined.
collections/Notes.js:73:8: 'Notes' is not defined.
collections/Notes.js:80:8: 'Notes' is not defined.
collections/Notes.js:84:1: 'Notes' is not defined.
collections/Notes.js:84:20: 'NotesSchema' is not defined.
collections/Notes.js:4:31: 'doc' is defined but never used.meteor test --full-app --driver-package=practicalmeteor:mocha
collections/Notes.js:7:31: 'doc' is defined but never used.
server/publish.js:6:11: 'Notes' is not defined.
server/main.js:1:1: 'import' is only available in ES6 (use esnext option).
server/main.js:3:17: 'arrow function syntax (=>)' is only available in ES6 (use esnext option).

While linting files with jshint for the app (Client):
lib/route.js:19:5: 'concise methods' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).
lib/route.js:29:9: 'concise methods' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).
lib/route.js:36:5: 'concise methods' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).
lib/route.js:43:5: 'concise methods' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).
lib/route.js:11:47: 'redirect' is defined but never used.
lib/route.js:11:38: 'context' is defined but never used.
client/recipes/NoteSingle.js:9:12: 'arrow function syntax (=>)' is only available in ES6 (use esnext option).
client/recipes/NoteSingle.js:11:16: 'Notes' is not defined.
client/recipes/Notes.js:10:13: 'arrow function syntax (=>)' is only available in ES6 (use esnext option).
client/recipes/Notes.js:11:16: 'Notes' is not defined.
client/Menu.js:10:13: 'arrow function syntax (=>)' is only available in ES6 (use esnext option).
client/Menu.js:11:16: 'Notes' is not defined.
collections/Notes.js:51:35: Missing semicolon.
collections/Notes.js:63:35: Missing semicolon.
collections/Notes.js:1:1: 'Notes' is not defined.
collections/Notes.js:3:1: 'Notes' is not defined.
collections/Notes.js:12:1: 'bullet' is not defined.
collections/Notes.js:21:1: 'NotesSchema' is not defined.
collections/Notes.js:34:16: 'bullet' is not defined.
collections/Notes.js:73:8: 'Notes' is not defined.
collections/Notes.js:80:8: 'Notes' is not defined.
collections/Notes.js:84:1: 'Notes' is not defined.
collections/Notes.js:84:20: 'NotesSchema' is not defined.
collections/Notes.js:4:31: 'doc' is defined but never used.
collections/Notes.js:7:31: 'doc' is defined but never used.
