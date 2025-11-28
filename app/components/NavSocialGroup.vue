<script setup lang="ts">
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/novaforge',
    icon: 'uil:github',
    ariaLabel: 'Visite nosso GitHub'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/novaforge',
    icon: 'uil:linkedin',
    ariaLabel: 'Conecte-se no LinkedIn'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/novaforge',
    icon: 'uil:instagram',
    ariaLabel: 'Siga-nos no Instagram'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/novaforge',
    icon: 'uil:facebook',
    ariaLabel: 'Curta nossa página no Facebook'
  }
]
</script>

<template>
  <div class="flex items-center justify-center gap-4">
    <a 
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="link.ariaLabel"
      class="group"
    >
      <Icon 
        :name="link.icon" 
        class="w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-colors" 
      />
    </a>
  </div>
</template>