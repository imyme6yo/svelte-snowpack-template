<script lang="ts">
  import { setContext } from 'svelte';
  import { beforeUrlChange } from '@roxi/routify';
  import { url } from '@roxi/routify';
  import { goto } from '@roxi/routify'; 

  import { PREV_PATH } from '@jupiter/stores/app.store';
  import { MCOMPONENTS } from '@jupiter/stores/modal.store';
  import { MINDEX } from '@jupiter/stores/modal.store';
  import { MDATA } from '@jupiter/stores/modal.store';

  // Callbacks
  $beforeUrlChange(() => {
    $PREV_PATH = $url();
    return true;
  });

  // Function
  const close = (data: Object) => {
    MCOMPONENTS.update(components=>[...components.slice(0, components.length-1)]);
    MINDEX.update(i=>i-1);
    $goto($PREV_PATH);
    MDATA.set(data);
  };

  const open = (component:any, data={}, options={includeContainer: false}) => {
    MCOMPONENTS.update(components=>[...components, {component: component, data: data, options: options}]);
    MINDEX.update(i=>i+1);
    const opts = {
      includeContainer: options.includeContainer
    };
    $goto("/modal", opts);
    console.log("goto");
    return MDATA;
  };

  setContext('modal', {
    open: open,
    close: close
  });

</script>
<style>

</style>

<slot />