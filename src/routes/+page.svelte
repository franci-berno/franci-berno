<script lang="ts">
  import PlainText from '../lib/components/PlainText.svelte';
  import RichText from '../lib/components/RichText.svelte';
  import PrimaryButton from '../lib/components/PrimaryButton.svelte';
  import SecondaryButton from '../lib/components/SecondaryButton.svelte';
  import Testimonial from '../lib/components/Testimonial.svelte';
  import IntroStep, { type IntroStepType } from '../lib/components/IntroStep.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import Image from '../lib/components/Image.svelte';
  import { dati } from './data_for_site';
  import WebsiteNav from '$lib/components/WebsiteNav.svelte';
  import { base } from '$app/paths';

  export let data;

  // --------------------------------------------------------------------------
  // DEFAULT PAGE CONTENT - AJDUST TO YOUR NEEDS
  // --------------------------------------------------------------------------
  const EMAIL = 'franci-berno@gmail.com';
  const INSTAGRAM = 'instagram.com/francescobernini7/';

  let title: string,
    testimonials: {
      text: string;
      image: string;
      name: string;
    }[],
    faqs: string,
    introStep1: IntroStepType,
    introStep2: IntroStepType,
    introStep3: IntroStepType,
    introStep4: IntroStepType,
    bioTitle: string,
    bioPicture: string,
    bio: string,
    currentUser: string;

  currentUser = 'admin';
  title = dati.title;
  faqs = dati.faqs;
  testimonials = dati.testimonals;
  bio = dati.bio;

    bioPicture = base + '/images/person-placeholder.jpg';
    bioTitle = "Hi, I'm Michael — I want your website to be editable.";

  introStep1 = {
    label: 'THE PROBLEM',
    title: 'The problem statement',
    description: 'Describe the problem you are solving in a short sentence.'
  };

  introStep2 = {
    label: 'THE DREAM',
    title: 'This is how it should be.',
    description: 'Describe why it should be like that.'
  };

  introStep3 = {
    label: 'THE REALITY',
    title: 'A statement why it is not that easy.',
    description: 'Describe the reality a bit more.'
  };

  introStep4 = {
    label: 'THE PROMISE',
    title: 'Still the solution is worth it.',
    description: 'And why this is, should be described here.'
  };
</script>

<svelte:head>
  <title>Francesco</title>
  <meta name="description" content="Francesco Bernini | Personal Trainer" />
  <link rel="alternate" hreflang="en" href="https://franci-berno.github.io" />
  <link rel="canonical" href="https:/franci-berno.github.io" />
</svelte:head>

<WebsiteNav />

<div>
  <div class="max-w-screen-md mx-auto px-6 pt-12 sm:pt-24">
    <svg
      class="pb-8 w-14 sm:w-24 mx-auto"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M164 110L64 163.768V200L164 147.059V110Z" fill="#111827" />
      <path d="M136 66L36 119.768V156L136 103.059V66Z" fill="#111827" />
      <path d="M164 0L64 53.7684V90L164 37.0588V0Z" fill="#111827" />
    </svg>
    <h1 class="text-4xl md:text-7xl font-bold text-center">
      <PlainText bind:content={title} />
    </h1>
    <div class="text-center pt-8 pb-4 bounce text-xl">↓</div>
    <div class="pt-4 pb-4 text-center">
      <PrimaryButton size="lg" type="button" on:click={() => console.log('CONTATTAMI')}
        >Contattami</PrimaryButton
      >
    </div>
  </div>
</div>

<div class="pt-12 md:pt-24 border-gray-100 border-b-2">
  <div class="max-w-screen-md mx-auto px-6">
    <div class="relative">
      <div class="w-1 bg-gray-900 absolute inset-0 -top-32 bottom-12 mx-auto z-0">
        <div class="w-4 h-4 rounded-full bg-gray-900 absolute -top-1 -left-[6px]" />
      </div>
      <div class="z-10">
        <IntroStep bind:intro={introStep1} />
        <IntroStep bind:intro={introStep2} />
        <IntroStep bind:intro={introStep3} />
        <IntroStep bind:intro={introStep4} />
      </div>
    </div>
    <div class="relative h-14">
      <div class="w-1 bg-gray-900 absolute inset-0 -top-16 bottom-12 mx-auto z-0">
        <div
          class="absolute -bottom-2 -left-[7px] h-0 w-0 border-x-[9px] border-x-transparent border-t-[10px] border-gray-900"
        />
      </div>
    </div>
  </div>
</div>

<div class="bg-white pb-6 sm:pb-12">
  <div class="max-w-screen-md mx-auto px-6">
    <div class="font-bold text-sm sm:text-base py-12 sm:pt-24 pb-8">DICONO DI ME</div>
  </div>
  {#each testimonials as testimonial, i}
    <Testimonial bind:testimonial firstEntry={i === 0} lastEntry={i === testimonials.length - 1} />
  {/each}
</div>

<!-- {#if !!data.articles && data.articles.length > 0}
  <div class="bg-white border-t-2 border-gray-100 pb-10 sm:pb-16">
    <div class="max-w-screen-md mx-auto px-6 pt-12 sm:pt-24">
      <div class="font-bold text-sm sm:text-base">FROM THE BLOG</div>
    </div>
    {#each data.articles as article, i}
      <ArticleTeaser {article} firstEntry={i === 0} />
    {/each}
  </div>
{/if} -->

<!-- Bio -->
<div id="contact" class="bg-white border-t-2 border-b-2 border-gray-100 pb-12 sm:pb-24">
  <div class="max-w-screen-md mx-auto px-6">
    <div class="pt-12 sm:pt-24 pb-12 text-center">
      <div class="w-48 h-48 md:w-72 md:h-72 mx-auto overflow-hidden relative rounded-full">
        <Image
          class="block w-48 h-48 md:w-72 md:h-72 rounded-full"
          maxWidth={384}
          maxHeight={384}
          quality={0.8}
          bind:src={bioPicture}
          alt="Michael Aufreiter"
        />
      </div>
    </div>
    <div class="">
      <h1 class="text-3xl md:text-5xl font-bold">
        <PlainText bind:content={bioTitle} />
      </h1>
    </div>
    <div class="prose md:prose-xl pb-6">
      <RichText bind:content={bio} />
    </div>

    <div class="flex flex-col sm:flex-row sm:space-x-6 md:space-x-8 space-y-4 sm:space-y-0">
      <PrimaryButton size="lg" href={`mailto:${EMAIL}`}>Email</PrimaryButton>
      <SecondaryButton size="lg" href={`https://${INSTAGRAM}`}>
        <div class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 64 64"
          >
            <path
              d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z"
            />
          </svg>
          Instagram
        </div>
      </SecondaryButton>
    </div>
  </div>
</div>

<!-- FAQs -->
<div class="bg-white">
  <div class="max-w-screen-md mx-auto px-6">
    <div class="font-bold text-sm sm:text-base pt-12 sm:pt-24 -mb-6 md:-mb-12">FAQs</div>
    <div class="prose md:prose-xl pb-12 sm:pb-24">
      <RichText bind:content={faqs} />
    </div>
  </div>
</div>

<Footer />
