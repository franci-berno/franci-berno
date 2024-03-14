<script lang="ts">
  import { classNames } from '../util';
  export let noPadding = false;
</script>

<div class={classNames('max-w-lg mx-auto', noPadding ? '' : 'px-4')}>
  <slot />
</div>
