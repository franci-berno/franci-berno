<script lang="ts">
  import PlainText from './PlainText.svelte';
  import { classNames } from '../util';
  import Image from './Image.svelte';

  export let testimonial: {
    image: string;
    name: string;
    text: string;
  };
  export let firstEntry: boolean = false;
  export let lastEntry: boolean = false;
</script>

<div class={classNames(firstEntry ? 'pt-2 pb-8 sm:pb-12' : 'py-8 sm:py-12')}>
  <div class="max-w-screen-md mx-auto px-6 flex space-x-6 sm:space-x-8 relative">
    <div class="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 overflow-hidden relative rounded-full">
      <Image
        class="rounded-full"
        maxWidth={160}
        maxHeight={160}
        quality={0.8}
        bind:src={testimonial.image}
        alt={testimonial.name}
      />
    </div>
    <div class="flex-1">
      <div class="text-lg sm:text-2xl italic">
        <PlainText bind:content={testimonial.text} />
      </div>
      <div class="mt-4 md:text-xl font-medium">
        <PlainText bind:content={testimonial.name} />
      </div>
    </div>
  </div>
</div>
