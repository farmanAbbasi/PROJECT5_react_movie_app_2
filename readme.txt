in root:

create a frontend with react app
and create the whole backend app files in root directly

"scripts":
 add these lines

    "start":"node server.js",
    "build":"cd frontend && npm run build",
    "install-client": "cd frontend && npm install",
    "heroku-postbuild":"npm run install-client && npm run build"

