<script setup lang="ts">
import HeroSection from './components/sections/HeroSection.vue';
import StatsSection from './components/sections/StatsSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import SolutionsSection from './components/sections/SolutionsSection.vue';
import FeaturesSection from './components/sections/FeaturesSection.vue';
import TargetSection from './components/sections/TargetSection.vue';
import CasesSection from './components/sections/CasesSection.vue';
import ProcessSection from './components/sections/ProcessSection.vue';
import FaqSection from './components/sections/FaqSection.vue';
import ContactFormSection from './components/sections/ContactFormSection.vue';
import CtaSection from './components/sections/CtaSection.vue';
import TheFooter from './components/TheFooter.vue';
import ScrollToTop from './components/ScrollToTop.vue';

useHead({
  htmlAttrs: {
    class: 'scroll-smooth'
  },
  title: 'Nova Forge - Tecnologia que Impulsiona Negócios',
  meta: [
    {
      name: 'description',
      content: 'Hub de tecnologia e transformação digital. Transformamos desafios em software robusto, escalável e preparado para crescer junto com você.'
    },
    { property: 'og:title', content: 'Nova Forge - Tecnologia que Impulsiona Negócios' },
    { property: 'og:description', content: 'Software robusto e escalável para seu negócio. Desenvolvimento Web, Automação e Gestão Digital.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'pt_BR' },
  ]
})
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SolutionsSection />
      <FeaturesSection />
      <TargetSection />
      <CasesSection />
      <ProcessSection />
      <FaqSection />
      <ContactFormSection />
      <CtaSection />
      <TheFooter />
      <ScrollToTop />
    </div>
  </NuxtLayout>
</template>