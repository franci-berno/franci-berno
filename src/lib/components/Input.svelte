<script lang="ts">
  export let value = '',
    id: string | undefined = undefined,
    type: 'button' | 'checkbox' | 'password' | 'text' = 'text',
    name: string | undefined = undefined,
    required: boolean | undefined = false,
    inputRef: any = null,
    placeholder: string | undefined = undefined;
</script>

<input
  autocomplete="off"
  {...{ type }}
  {placeholder}
  {name}
  {id}
  {required}
  bind:value
  bind:this={inputRef}
  class="border focus focus:border-gray-800 focus:ring-gray-800"
/>
