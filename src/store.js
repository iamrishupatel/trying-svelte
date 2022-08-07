import { writable, derived } from "svelte/store";

export const store = writable([]);

export const tabStatus = writable("all");

export const filteredTodos = derived(
  [store, tabStatus],
  ([$store, $tabStatus]) =>
    $store.filter(todo => {
      if ($tabStatus === "all") return true;
      // active is the task still in progress;
      if ($tabStatus === "active" && !todo.status) return true;
      if ($tabStatus === "completed" && todo.status) return true;
    })
);
