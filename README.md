Hapi.js boilerplate
===================

**Features:**

- simple directories structure (see more below)
- auto reload of Node.js during development
- auto reload of frontend during development
- Gulp with modular config:
 - SASS compiling
 - CSSautoprefixing
 - CSS & JS minifying
 - image compressing
 - code style checking for frontend and backend
- modularized & automatic Hapi.js bootstrapping
- session handling and social services login implemented
- WebSockets initialization

**Node.js libraries and modules included:**

- Gulp.js: build system (gulpjs.com)
- Bluebird.js: promises(https://github.com/petkaantonov/bluebird)
- Handlebars.js: view engine (http://handlebarsjs.com)
- require-dir: require all modules in directory(https://github.com/aseemk/requireDir)
- config: config injecting (https://github.com/lorenwest/node-config)
- Lo-dash: utilities (https://lodash.com)
- Winston: logging (https://github.com/flatiron/winston)
- ws: WebSockets (https://github.com/einaros/ws)

**Hapi.js plugins included:**

- boom
- bell
- joi
- wreck
- hapi-auth-cookie

**Directory structure:**

```
/app
  /bootstrap
  /common
  /controllers
  /models
  /views
/config
  default.js
  local.js
/gulp  (one  file  per  task)
/static
  /dev
  /dist
```

**bootstrap:**
Contains modules responsible for bootstrapping our Hapi.js application. One module per functionality.
By default it contains modules for initializing `hooks`, `routes`, `server`, `sockets`, `strategies` and `views`.

Main `index.js` will automatically grab every modules from `bootstrap` directory, expecting for them to be functions.
Only exception is bootstrapping server. Only config is injected there so it will be attached to `server` object and will
be accessible with `server.settings.app.get('key.child_key')`

**common:**
Contains shared code for various part of application. By default you can find there JSCS filter and module responsible
for generating social login route.

**controllers:**
Full configuration for route in one file per route. By "full configuration" we mean: method, path, route config and callback.

**models:**
Mongoose models, one per file.

**views:**
Views for actions + layout.

**config:**
Contains one file per environment. For more details check this link: https://github.com/lorenwest/node-config

**gulp:**
One file per task. `Gulpfile.js` will later run and register every task from this directory.

http://blog.risingstack.com/content/images/2014/12/hapi_request_lifecycle.png