import { goto } from '@roxi/routify'; 

import { PREV_PATH } from '@jupiter/stores/app.store';
import { MCOMPONENTS } from '@jupiter/stores/modal.store';
import { MINDEX } from '@jupiter/stores/modal.store';
import { MDATA } from '@jupiter/stores/modal.store';

export const close = (data={}) => {
  console.log("close");
  MCOMPONENTS.update(components=>[...components.slice(0, components.length-1)]);
  MINDEX.update(i=>i-1);
  console.log($PREV_PATH);
  $goto($PREV_PATH);
  MDATA.set(data);
};

export const open = (component:any, data={}, options={includeContainer: false}) => {
  MCOMPONENTS.update(components=>[...components, {component: component, data: data, options: options}]);
  MINDEX.update(i=>i+1);
  const opts = {
    includeContainer: options.includeContainer
  };
  $goto("/modal", opts);
  return MDATA;
};