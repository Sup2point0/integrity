<!-- @component DesmosAPI
 
Inserts a request to the Desmos API in `<head>`. All pages that use the Desmos API somewhere *em* inside should include this component.
-->


<svelte:head>
  <script src="https://www.desmos.com/api/v1.11/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
  
  <script>
    console.info("sup adventurer o/ don’t worry, I have seen this notice – when I emailed Desmos asking for a production key, they told me I could just use this prototype key, so it’s all good o7");
  </script>
</svelte:head>
