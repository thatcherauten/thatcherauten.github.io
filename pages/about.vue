<template>
  <div class="max-w-3xl mx-auto py-8 px-4">
    <h1 class="text-4xl font-bold mb-6">About Me</h1>

    <PrimePanel header="Favorite Movies" class="my-6">
      <ul class="list-disc pl-6">
        <li>Baby Driver</li>
        <li>Good Will Hunting</li>
        <li>La La Land</li>
        <li>Rango</li>
      </ul>
    </PrimePanel>

    <PrimePanel header="My Favorite Site" class="my-6">
      <a href="https://thatcherauten.github.io" class="text-blue-500 underline">GitHub</a>
    </PrimePanel>

    <PrimePanel header="A Photo" class="my-6">
      <img
        src="/seniorpic.jpg"
        alt="Senior Photo"
        class="rounded shadow"
      />
    </PrimePanel>

    <PrimePanel header="Featured Video" class="my-6">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/watch?v=VnFxuW61GiY"
        title="YouTube video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="rounded"
      ></iframe>
    </PrimePanel>

    <PrimePanel header="Navigate" class="my-6">
      <div class="flex gap-4">
        <NuxtLink to="/">
          <PrimeButton label="Home" icon="pi pi-home" />
        </NuxtLink>
        <NuxtLink to="/resume">
          <PrimeButton label="Resume" icon="pi pi-file" />
        </NuxtLink>
      </div>
    </PrimePanel>
  </div>
</template>