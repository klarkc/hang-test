const pouchdbDebug = require('pouchdb-debug');
const { PouchDB, createRxDatabase, addRxPlugin } = require('rxdb');

// debug all
PouchDB.plugin(pouchdbDebug);
PouchDB.debug.enable('*');

const PouchDBAdapterMemory = require('pouchdb-adapter-memory');

addRxPlugin(PouchDBAdapterMemory);

it('creates and destroy database', () => createRxDatabase({
  name: 'foo',
  adapter: 'memory',
  eventReduce: true,
}).then((db) => db.destroy()));
