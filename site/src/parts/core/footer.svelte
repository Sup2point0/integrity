<!-- @component Footer -->

<script lang="ts">

import { base } from "$app/paths";

</script>


<footer>
  <div class="content">

    <div class="left">
      <img id="integrity-title"
        alt="integrity’"
        src="{base}/integrity-title.svg" />
    </div>
  
    <div class="right">
      <a class="credits" href="https://github.com/Sup2point0">
        <div>
          <p> made with love by </p>
          <p id="sup2point0"> Sup#2.0 </p>
        </div>
  
        <img id="purple-portal"
          alt="Sup#2.0"
          src="https://sup2point0.github.io/purple-portal.png" />
      </a>
    </div>

  </div>
</footer>


<style lang="scss">

footer {
  width: 100%;
  padding: 4rem 0 4rem;
  background-color: oklch(99% 0 0);

  .content {
    width: 80%;
    max-width: 80rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  }
}

.left { text-align: left; }
.right { text-align: right; }

a.credits {
  padding: 1em;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  border-radius: 1em;

  @include interact($col-hover, $col-click);
  @include focus-outline;
}


img#integrity-title {
  max-width: 20rem;
}

img#purple-portal {
  max-height: 3em;
  aspect-ratio: 1;
}

</style>
