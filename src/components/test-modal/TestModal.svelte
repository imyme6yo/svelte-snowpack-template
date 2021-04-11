<script lang="ts">
  export let dismiss;
</script>
<style>
  .modal-content {
    margin: auto;
    background: white;
    font-size: 5rem;
    border: 1px solid #e2e8f0;
    width: 30%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    text-align: center;
  }
</style>

<div class="modal-content" on:click={() => dismiss()} >
  Test Modal
</div>