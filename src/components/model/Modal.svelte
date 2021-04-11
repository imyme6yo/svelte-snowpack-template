<script lang="ts">
  import { getContext } from 'svelte';

  import { leftover } from '@roxi/routify';
  import { params } from '@roxi/routify';
  
  import { MINDEX } from '@jupiter/stores/modal.store';
  import { MCOMPONENTS } from '@jupiter/stores/modal.store';

  import ModalContainer from '@jupiter/components/modal/ModalContainer.svelte';
  import ModalContent from '@jupiter/components/modal/ModalContent.svelte';
  
  // Functions
  const { close } = getContext('modal');
</script>

{#if $MINDEX > 0}
  {#if $params.includeContainer}
    <ModalContainer>
      <svelte:component this={$MCOMPONENTS[$MINDEX].component} data={$MCOMPONENTS[$MINDEX].data} options={$MCOMPONENTS[$MINDEX].options} dismiss={close}/>
    </ModalContainer>
  {:else}
    <svelte:component this={$MCOMPONENTS[$MINDEX].component} data={$MCOMPONENTS[$MINDEX].data} options={$MCOMPONENTS[$MINDEX].options} dismiss={close}/>
  {/if}
{/if}