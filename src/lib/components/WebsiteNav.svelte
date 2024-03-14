<script lang="ts">
  import { base } from '$app/paths';
</script>

<div
  class="backdrop-blur-sm bg-white bg-opacity-95 transition-colors duration-500 z-10 text-sm sticky top-0"
>
  <div class="max-w-xs mx-auto py-4">
    <div class="flex items-center relative">
      <div class="flex-1" />
      <a class="mr-4 font-medium px-2 py-1 rounded-md hover:text-black" href={`${base}/`}>About</a>
      <a class="mr-4 font-medium px-2 py-1 rounded-md hover:text-black" href={`${base}/imprint`}>
        Imprint
      </a>
      <a class="mr-4 font-medium px-2 py-1 rounded-md hover:text-black" href={`${base}/#contact`}>
        Contact
      </a>
      <div class="flex-1" />
    </div>
  </div>
</div>
