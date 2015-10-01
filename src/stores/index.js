const Dispatcher = require('../dispatcher');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');
const {CHECKAS} = require('../const/actions');
const {CHANGE_EVENT} = require('../const/events');

const _store = {
  count: 0
};

const Store = assign({}, EventEmitter.prototype, {

  get() {
    return _store;
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  increment() {
    _store.count++;
    this.emit(CHANGE_EVENT);
  }

});
module.exports = Store;

Dispatcher.register(function(action) {
  switch(action.type) {
    case CHECKAS:
      break;
  }
});
