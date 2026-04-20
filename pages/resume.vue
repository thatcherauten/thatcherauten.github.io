<template>
  <div class="max-w-3xl mx-auto py-8 px-4">
    <h1 class="text-4xl font-bold mb-6">Resume</h1>

    <PrimePanel header="Contact" class="my-6">
      <div>
        <p>Email:thatcherauten@ksu.edu</p>
        <p>Phone: (316) 260-0414</p>
        <p>Location: Manhattan, KS</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/thatcher-auten-0aa72a372/" class="text-blue-500 underline"></a></p>
      </div>
    </PrimePanel>

    <PrimePanel header="Education" class="my-6">
      <div>
        <h3 class="text-xl font-semibold">Kansas State University</h3>
        <p>Bachelor of Science in Computer Science</p>
        <p>Bachelor of Science in Cybersecurity</p>
        <p>Expected Graduation: May 2029</p>
      </div>
    </PrimePanel>

    <PrimePanel header="Work Experience" class="my-6">
      <div class="mb-4">
        <h3 class="text-xl font-semibold">Kitchen Leader In-Training — Chipotle Mexican Grill</h3>
        <p class="text-gray-500">Apr 2023 – Present</p>
        <p>Brief description of your responsibilities and accomplishments in this role.</p>
      </div>
      <div>
        <h3 class="text-xl font-semibold">End User Services Intern — Textron Aviation</h3>
        <p class="text-gray-500">May 2025 – Jul 2025</p>
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