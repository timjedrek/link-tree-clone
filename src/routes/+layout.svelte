<script>
  import "../app.css";
  import Analytics from '$lib/analytics.svelte';
</script>
<div class="min-h-screen flex flex-col">
  <Analytics />
  <slot />
</div>