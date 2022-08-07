<script>
  import { tabStatus } from "../store";

  function handleClick(e) {
    // get target from data-set
    // the target var is the tab to be opened
    const target = e.target.dataset.target;

    if (e.target.nodeName === "LI") {
      // remove old highlight style from all list elements
      e.currentTarget.childNodes.forEach(el => {
        el?.classList?.remove("active");
      });
      // set status to target;
      tabStatus.set(target);
      // highlight the correct tab
      e.target.classList.add("active");
    }
  }
</script>

<ul on:click={handleClick}>
  <li data-target="all" class="active">All</li>
  <li data-target="active">Active</li>
  <li data-target="completed">Completed</li>
</ul>

<style>
  ul {
    border-bottom: 1px solid var(--border-color);
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }

  li {
    min-width: 100px;
    text-align: center;
    cursor: pointer;
    position: relative;
  }
  li.active::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 4px;
    background-color: var(--primary-color);
    left: 0;
    bottom: -2px;
    border-radius: 6px 6px 0 0;
  }

  @media screen and (max-width: 400px) {
    ul {
      margin-bottom: 1.6rem;
    }
    li {
      min-width: 40px;
    }
  }
</style>
