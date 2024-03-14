<script lang="ts">
  import BaseButton from '$lib/components/BaseButton.svelte';
  export let disabled: boolean = false,
    type: 'button' | 'submit' | 'reset' | undefined = 'button',
    size: 'sm' | 'lg' | 'default' | undefined = undefined,
    href: string | undefined = undefined;
</script>

<BaseButton
  {type}
  {size}
  {disabled}
  {href}
  class={'font-medium hover:bg-gray-800 focus:ring-gray-900 border-2 border-transparent bg-gray-900 text-white'}
  on:click
>
  <slot />
</BaseButton>
