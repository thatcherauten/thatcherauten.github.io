Here's the updated about.vue with your embed code dropped in:
vue<template>
  <div class="max-w-3xl mx-auto py-8 px-4">
    <h1 class="text-4xl font-bold mb-6">About Me</h1>

    <PrimePanel header="Favorite Movies & TV Shows" class="my-6">
      <ul class="list-disc pl-6">
        <li>Breaking Bad</li>
        <li>The Dark Knight</li>
        <li>Interstellar</li>
        <li>The Office</li>
      </ul>
    </PrimePanel>

    <PrimePanel header="My Favorite Site" class="my-6">
      <a href="https://github.com" class="text-blue-500 underline">GitHub</a>
    </PrimePanel>

    <PrimePanel header="A Photo" class="my-6">
      <img
        src="/seniorpic.jpg"
        alt="Senior photo"
        class="rounded shadow"
      />
    </PrimePanel>

    <PrimePanel header="Featured Video" class="my-6">
      <iframe
        width="903"
        height="508"
        src="https://www.youtube-nocookie.com/embed/VnFxuW61GiY"
        title="Negative Side AWP"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="rounded max-w-full"
      ></iframe>
      <p class="mt-2 text-sm text-gray-600">A video of my High School Robotics team's robot. 
        This video is of one of my autonomous routines at the 2025 VEX Robotics Kansas State Championships;
        everything you see in this video is happening without any input from the drivers.
        My robot is the one closest to the camera. I was the builder, programmer, and driver for my team.
      </p>
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