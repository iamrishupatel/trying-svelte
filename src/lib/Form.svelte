<script>
  import { store } from "../store";
  let todo;

  function addTodo() {
    if (todo.trim() === "") return;
    store.update(oldTodos => [
      ...oldTodos,
      { data: todo, id: Date.now(), status: false },
    ]);
    todo = "";
  }

  // to disabe the button if input is empty;
  $: disabled = (() => {
    if (todo?.trim().length) return false;
    return true;
  })();
</script>

<form on:submit|preventDefault={addTodo}>
  <input
    type="text"
    bind:value={todo}
    class="input-todo"
    placeholder="add a todo"
    name="todo"
  />

  <button type="submit" {disabled}>Add Todo</button>
</form>

<style>
  form {
    display: flex;
    gap: 0.5rem 1rem;
    width: 100%;
  }
  input,
  button {
    border-radius: 12px;
    padding: 0.6em 1.2em;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.25s;
  }

  input {
    flex: 1;
    background: transparent;
    color: var(--text-color);
    border: 1px solid var(--border-color);
  }
  input:hover {
    border: 1px solid var(--primary-color);
  }
  input:focus {
    outline: 2px solid var(--primary-color);
    border-color: var(--primary-color);
  }

  button {
    background-color: var(--primary-color);
    cursor: pointer;
    color: #fff;
    border: transparent;
  }
  button:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  button:disabled {
    cursor: not-allowed;
    background-color: lightslategrey;
    opacity: 0.8;
  }
  button[disabled]:hover {
    cursor: not-allowed;
    border-color: transparent;
  }

  @media screen and (max-width: 400px) {
    form {
      flex-direction: column;
    }
  }
</style>
