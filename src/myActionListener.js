export default class MyActionListener {
    constructor() {
      this.listeners = new Map();
    }
  
    registerListener(action, listener) {
      if (!this.listeners.has(action)) {
        this.listeners.set(action, []);
      }
      this.listeners.get(action).push(listener);
    }
  
    removeListener(action) {
      this.listeners.delete(action);
    }
  
    emit(action, data) {
      if (!this.listeners.has(action)) {
        throw new Error(`Can't emit an event. Event "${action}" doesn't exits.`);
      }
      for (const listener of this.listeners.get(action)) {
        listener(data);
      }
    }
  }
  