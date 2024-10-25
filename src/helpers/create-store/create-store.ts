export type Store<T> = {
  get: () => T;
  set: (callback: (currentState: T) => T) => void;
  subscribe: (callback: (state: T) => void) => () => void;
};

/**
 * Create an immutable store
 */
export function createStore<T>(initialState: T): Store<T> {
  let state = initialState;
  const subscribers = new Set<(state: T) => void>();

  function get() {
    return state;
  }

  function set(callback: (currentState: T) => T) {
    state = callback(state);
    subscribers.forEach((subscriber) => subscriber(state));
  }

  function subscribe(callback: (state: T) => void) {
    subscribers.add(callback);
    callback(state);

    return () => {
      subscribers.delete(callback);
    };
  }

  return {
    get,
    set,
    subscribe,
  };
}
