<footer>
  <span> Buit with </span>
  <img src="/vite.svg" alt="vite-logo" />
  <p>&</p>
  <img src="/svelte.svg" alt="svelte-logo" />
  <span> on a sunday evening. </span>
</footer>

<style>
  footer {
    height: 3rem;
    position: fixed;
    bottom: 0rem;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: var(--bg-color);
    border-top: 1px solid var(--border-color);
  }

  @media screen and (max-width: 400px) {
    footer {
      gap: 0.4rem;
      font-size: 16px;
    }
  }
</style>
