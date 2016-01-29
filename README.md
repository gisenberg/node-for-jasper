## Samples

These samples offer potential solutions to some common pain points you
might have run into.

All examples were tested against node 0.12, but should work on pretty
much any version.

### 1-mocks

1-mocks illustrates how to use proxyquire to mock module
dependencies in unit tests. The example writes tests
around the `attack` function in `player.js`, which has a
dependency on `die.js` to determine whether or not to crit.

To run the example:
```sh
cd 1-mocks
npm install
npm run test
```

### 2-debug

2-debug illustrates how to use node-inspector to attach the Chrome
Developer tools to your running server process by navigating to a link.
Once open, the developer tools will allow you to set breakpoints on a method that intermittently fails.

To run the example:
```sh
cd 2-debug
npm install
npm run start-debug
```

Example output:
```sh
[gisenberg@mbp15:~/git/node-for-jasper/2-debug (master)]$ npm run start-debug

> 2-remote-debug@1.0.0 start-debug /Users/gisenberg/git/node-for-jasper/2-debug
> node-debug src/server.js

Node Inspector is now available from http://127.0.0.1:8080/?ws=127.0.0.1:8080&port=5858
Debugging `src/server.js`

Debugger listening on port 5858
```

### 3-log-to-elastic

3-log-to-elastic hosts a REST endpoint that is instrumented to log error
and informational messages to a remote elasticsearch instance.

To run the example:
```sh
cd 3-log-to-elastic
npm install
npm run start
```

Afterwards, navigate to `http://localhost:8080/`

