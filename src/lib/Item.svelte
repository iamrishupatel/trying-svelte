<script>
  import FaRegTrashAlt from "svelte-icons/fa/FaRegTrashAlt.svelte";
  import { store } from "../store";

  export let todo;

  function deleteTodo() {
    store.update(todos => todos.filter(myTodo => myTodo.id !== todo.id));
  }

  function handleChange(e) {
    const checked = e.target.checked;
    store.update(todos =>
      todos.map(myTodo => {
        if (myTodo.id === todo.id) {
          myTodo.status = checked;
        }
        return myTodo;
      })
    );
  }
</script>

<li>
  <input type="checkbox" bind:checked={todo.status} on:change={handleChange} />
  <p class={todo.status ? "checked" : ""}>{todo.data}</p>
  <div class="icon" on:click={deleteTodo}>
    <FaRegTrashAlt />
  </div>
</li>

<style>
  input {
    cursor: pointer;
  }
  .icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  p {
    margin: 0;
    flex: 1;
  }
  li {
    padding: 0.6rem;
    border-radius: 8px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
    text-transform: capitalize;
  }
  .checked {
    text-decoration: line-through;
    opacity: 0.5;
  }
</style>
