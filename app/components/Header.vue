<script setup lang="ts">
  import NavSocialGroup from "./NavSocialGroup.vue";
</script>

<template>
  <header class="flex items-center justify-between px-6 py-12 bg-transparent text-slate-100">
    <h1 class="text-3xl font-bold select-none font-orbitron">
      Nova Forge
    </h1>
    <nav class="flex gap-10">
      <NuxtLink class="text-slate-300 hover:text-slate-100" to="/">
        Smart Contracts
      </NuxtLink>
      <NuxtLink class="text-slate-300 hover:text-slate-100" to="/projects">
        Services
      </NuxtLink>
      <NuxtLink class="text-slate-300 hover:text-slate-100" to="/projects">
        Solutions
      </NuxtLink>
      <NuxtLink class="text-slate-300 hover:text-slate-100" to="/projects">
        Roadmap
      </NuxtLink>
      <NuxtLink>
        Contact Us
      </NuxtLink>
    </nav>

    <NavSocialGroup />
  </header>
</template>