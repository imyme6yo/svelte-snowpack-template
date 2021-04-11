<script lang="ts">
  import { getContext } from 'svelte';

  import ModalContainer from '@jupiter/components/modal/ModalContainer.svelte';
  import ModalContent from '@jupiter/components/modal/ModalContent.svelte';
  
  // Functions
  const { close } = getContext('modal');
</script>
<style>
  .modal-container {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding-top: 5rem;
    background: rgba(0, 0, 0, 0.2);
  }
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
<div class="modal-container">
  <slot />
</div>