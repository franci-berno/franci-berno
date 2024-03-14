<script lang="ts">
  import BaseButton from '$lib/components/BaseButton.svelte';

  export let disabled: boolean | undefined = undefined,
    type: 'button' | 'submit' | 'reset' = 'button',
    size: 'sm' | 'lg' | 'default' | undefined = undefined,
    href: string | undefined = undefined;
</script>

<BaseButton
  {href}
  {type}
  {disabled}
  {size}
  class={'font-medium hover:bg-gray-100 focus:ring-gray-100 border-2 border-gray-100 bg-white'}
  on:click
>
  <slot />
</BaseButton>
