<script lang="ts">
  export let src: string | undefined = undefined,
    alt: string | undefined = undefined,
    maxWidth: number | undefined = undefined,
    quality: number | undefined = undefined,
    maxHeight: number | undefined = undefined;

  let className: string | undefined = undefined;

  export { className as class };
</script>

<img width={maxWidth} height={maxHeight} class={className} {src} {alt} />
