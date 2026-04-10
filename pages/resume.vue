<template>
  <div class="max-w-3xl mx-auto py-8 px-4">
    <h1 class="text-4xl font-bold mb-6">Resume</h1>

    <PrimePanel header="Contact" class="my-6">
      <div>
        <p>Email: you@example.com</p>
        <p>Phone: (555) 555-5555</p>
        <p>Location: Manhattan, KS</p>
        <p>LinkedIn: <a href="https://linkedin.com" class="text-blue-500 underline">linkedin.com/in/yourname</a></p>
      </div>
    </PrimePanel>

    <PrimePanel header="Education" class="my-6">
      <div>
        <h3 class="text-xl font-semibold">Kansas State University</h3>
        <p>Bachelor of Science in Computer Science</p>
        <p>Expected Graduation: May 2026</p>
      </div>
    </PrimePanel>

    <PrimePanel header="Work Experience" class="my-6">
      <div class="mb-4">
        <h3 class="text-xl font-semibold">Job Title — Company Name</h3>
        <p class="text-gray-500">Jan 2024 – Present</p>
        <p>Brief description of your responsibilities and accomplishments in this role.</p>
      </div>
      <div>
        <h3 class="text-xl font-semibold">Job Title — Company Name</h3>
        <p class="text-gray-500">May 2023 – Dec 2023</p>
        <p>Brief description of your responsibilities and accomplishments in this role.</p>
      </div>
    </PrimePanel>

    <PrimePanel header="Skills" class="my-6">
      <div>
        <ul class="list-disc pl-6">
          <li>JavaScript / Vue.js / Nuxt</li>
          <li>HTML & CSS / Tailwind</li>
          <li>Python</li>
          <li>Git & GitHub</li>
          <li>Problem Solving & Communication</li>
        </ul>
      </div>
    </PrimePanel>

    <PrimePanel header="Navigate" class="my-6">
      <div class="flex gap-4">
        <NuxtLink to="/">
          <PrimeButton label="Home" icon="pi pi-home" />
        </NuxtLink>
        <NuxtLink to="/about">
          <PrimeButton label="About Me" icon="pi pi-user" />
        </NuxtLink>
      </div>
    </PrimePanel>
  </div>
</template>