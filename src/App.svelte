<script>
  import Item from "./lib/Item.svelte";
  import Footer from "./lib/Footer.svelte";
  import Tabs from "./lib/Tabs.svelte";
  import Form from "./lib/Form.svelte";

  import { tabStatus, store, filteredTodos } from "./store.js";

  let todos;
  filteredTodos.subscribe(value => {
    todos = value;
  });

  let tabStat;
  tabStatus.subscribe(value => {
    tabStat = value;
  });

  function deleteCompletedTodos() {
    store.update(todos => todos.filter(todo => !todo.status));
  }
</script>

<main>
  <h1>#todo</h1>

  <!-- tabs -->
  <Tabs />

  <!-- form to add todos -->
  <Form />

  <!-- present todos -->
  <section>
    <ul>
      {#if todos.length <= 0}
        <div class="centered">
          <img src="/nothing.gif" alt="nothing-gif" />
          <span>(cricket-sounds): nothing here</span>
        </div>
      {/if}
      {#each todos as todo (todo.id)}
        <Item {todo} />
      {/each}
      {#if todos.length && tabStat === "completed"}
        <button on:click={deleteCompletedTodos}>Delete completed</button>
      {/if}
    </ul>
  </section>
</main>
<Footer />

<style>
  h1 {
    font-size: 2.6rem;
    margin-bottom: 2rem;
  }

  main {
    width: 90vw;
    max-width: 720px;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section {
    width: 100%;
  }
  .centered {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 320px;
    padding-bottom: 0.4rem;
  }

  ul {
    display: flex;
    flex-direction: column;
  }
  button {
    justify-self: end;
    align-self: flex-end;
    margin-top: 1rem;
    background-color: var(--danger-color);
    border-radius: 12px;
    padding: 0.6em 1.2em;
    border: none;
    color: #f2f2f2;
  }
  button:focus {
    outline: 2px solid var(--danger-color);
    outline-offset: 2px;
  }

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 2rem;
    }
    main {
      width: 100vw;
    }
  }
</style>
