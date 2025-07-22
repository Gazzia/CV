<script>
  import {fade} from "svelte/transition";
  import {openTab} from "../stores.ts";
  import {headline} from "../data.ts";
</script>

<header in:fade>
  <div class="info">
    <div id="avatar"><img src="assets/cv.jpg" alt=""/></div>
    <div id="title">
      <h1>Joseph Allain</h1>
      <h2>{headline.title}</h2>
    </div>
  </div>
  <div class="desc">{headline.subtitle}</div>
  <div class="tabs">
    <button
      class="tab"
      class:active={$openTab === "infos"}
      on:click={() => $openTab = "infos"}>
      Infos
    </button>
    <button
      class="tab"
      class:active={$openTab === "contact"}
      on:click={() => $openTab = "contact"}>
      Contact
    </button>
  </div>
</header>

<style>
  header {
    position: relative;
    width: 100%;
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0.8px 3.2px rgba(0, 0, 0, 0.008), 0 1.9px 7.6px rgba(0, 0, 0, 0.012),
    0 3.6px 14.3px rgba(0, 0, 0, 0.015), 0 6.5px 25.5px rgba(0, 0, 0, 0.018),
    0 12.1px 47.6px rgba(0, 0, 0, 0.022), 0 29px 114px rgba(0, 0, 0, 0.03);
    padding: 20px 25px;
    box-sizing: border-box;
    flex-direction: column;
    z-index: 4;
  }

  .info {
    display: flex;
    margin-bottom: 30px;
  }

  @media (max-width: 400px) {
    .info {
      margin-bottom: 20px;
    }
  }

  .desc {
    width: 450px;
    max-width: 100%;
    margin-bottom: 17px;
    text-align: center;
    opacity: 0.6;
    letter-spacing: 0.4px;
    font-size: 14px;
    border-bottom: 1px solid #80808040;
    padding-bottom: 20px;
  }

  .tabs {
    display: flex;
    gap: 17px;
  }

  .tab {
    color: var(--main-color);
    background-color: white;
    font-family: inherit;
    text-transform: uppercase;
    font-size: 14px;
    cursor: pointer;
    padding: 6px 19px;
    border-radius: 6px;
    border: 1px solid var(--main-color);
    transition: 0.2s;
    font-weight: 600;
  }

  .tab.active {
    background-color: var(--accent-color);
    color: white;
    border-color: transparent;
  }

  #avatar {
    flex: 0 0 auto;
    display: flex;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    box-shadow: 0 1.1px 2.2px rgba(0, 0, 0, 0.011), 0 2.7px 5.3px rgba(0, 0, 0, 0.016),
    0 5px 10px rgba(0, 0, 0, 0.02), 0 8.9px 17.9px rgba(0, 0, 0, 0.024),
    0 16.7px 33.4px rgba(0, 0, 0, 0.029), 0 40px 80px rgba(0, 0, 0, 0.04);
  }

  #avatar img {
    width: 80px;
    height: 80px;
  }

  #title {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    margin-left: 30px;
    /* text-align: center; */
  }

  #title h1 {
    color: var(--main-color);
  }

  #title h2 {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.2em;
  }

  @media (max-width: 376px) {
    #title h1 {
      line-height: 1em;
      margin-bottom: 7px;
      font-size: 27px;
    }

    #title h2 {
      font-size: 16px;
    }
  }
</style>
