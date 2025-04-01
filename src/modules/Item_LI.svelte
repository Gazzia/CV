<script>
  export let text = "";
  export let under = "";
  export let rating = "";
  export let icon = false;
  const ratingStrings = ["Notions", "Débutant", "Familier", "Bon", "Solide", "Maîtrise"];
</script>

{#if rating.length === 0}
  <dd>
    {#if icon}
      <img src="../assets/{icon}" alt=""/>
    {/if}
    {text}
  </dd>
  {#if under.length > 0}
    <small>{under}</small>
  {/if}
{:else}
  <dd class="double">
    <div class="text">
      {#if icon}
        <img src="../assets/{icon}" alt=""/>
      {/if}{text}
    </div>
    <div class="rating">{ratingStrings[+rating]}</div>
  </dd>
{/if}

<style>
  dd, small {
    margin-left: 10px;
    display: flex;
    align-items: center;
  }

  dd.double {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .rating {
    background-color: #fff;
    color: var(--main-color);
    padding: 2px 5px;
    font-size: 12px;
    border-radius: 3px;
    font-weight: 500;
    box-shadow: 0 0.2px 0.2px rgba(0, 0, 0, 0.008), 0 0.5px 0.5px rgba(0, 0, 0, 0.012),
    0 0.9px 0.9px rgba(0, 0, 0, 0.015), 0 1.6px 1.6px rgba(0, 0, 0, 0.018),
    0 2.9px 2.9px rgba(0, 0, 0, 0.022), 0 7px 7px rgba(0, 0, 0, 0.03);
    border: 1px solid var(--main-color);
    flex: 0 0 auto;
    height: max-content;
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-height: 18px;
    max-width: 18px;
    margin-bottom: 1px;
    margin-right: 8px;
  }
</style>
