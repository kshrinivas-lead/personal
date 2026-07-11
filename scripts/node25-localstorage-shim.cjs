/**
 * Node 25 ships an experimental `globalThis.localStorage` that exists as an
 * object but whose methods throw unless the process was started with
 * `--localstorage-file <path>`.
 *
 * Server-side code (next-themes, and Next itself) feature-detects with
 * `typeof localStorage !== "undefined"`. On Node 25 that check now passes on the
 * server, the code calls localStorage.getItem(), and the request 500s with
 * "localStorage.getItem is not a function".
 *
 * Deleting the global restores the pre-Node-25 behaviour those guards expect.
 * The browser is unaffected — this only runs in the Node process.
 *
 * Remove this file once the project runs on a supported Node (18/20/22).
 */
try {
  if (typeof globalThis.localStorage !== "undefined") {
    delete globalThis.localStorage;
  }
  if (typeof globalThis.sessionStorage !== "undefined") {
    delete globalThis.sessionStorage;
  }
} catch {
  // Non-configurable on some builds; fall back to a no-op stub that satisfies
  // the feature detection without throwing.
  Object.defineProperty(globalThis, "localStorage", {
    value: undefined,
    configurable: true,
  });
}
