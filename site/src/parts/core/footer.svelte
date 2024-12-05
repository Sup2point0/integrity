<!-- @component Footer -->

<script lang="ts">

import { base } from "$app/paths";

</script>


<footer>
  <div class="content">

    <div class="left">
      <img id="integrity-title"
        alt="integrity’"
        src="{base}/title.svg" />
    </div>
  
    <div class="right">
      <a class="credits" href="https://github.com/Sup2point0">
        <div>
          <p> made with love by </p>
          <p id="sup2point0"> Sup#2.0 </p>
        </div>
  
        <img id="purple-portal"
          alt="Sup#2.0"
          src="{base}/purple-portal.png" />
      </div>
    </div>

  </div>
</footer>


<style lang="scss">

footer {
  width: 100%;
  padding: 1rem 0 4rem;

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
  text-decoration; none;

  @include interact;
  @include focus;
}


img#integrity-title {
  max-width: 20rem;
}

img#purple-portal {
  max-width: 10rem;
}

</style>
