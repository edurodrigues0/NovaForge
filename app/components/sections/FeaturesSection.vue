<script setup lang="ts">
const features = [
  {
    title: 'Robustez',
    description: 'Sistemas críticos que não falham. Sua operação não pode parar, e nosso software garante essa estabilidade.',
    icon: 'uil:shield-check'
  },
  {
    title: 'Escalabilidade',
    description: 'Preparamos o terreno para o seu crescimento. Nossas soluções acompanham a evolução do seu negócio sem precisar ser refeitas.',
    icon: 'uil:arrow-growth'
  },
  {
    title: 'Praticidade',
    description: 'Foco total na experiência do usuário (UX). Criamos interfaces intuitivas que sua equipe vai realmente querer usar.',
    icon: 'uil:mouse-alt'
  }
]
</script>

<template>
  <section id="features" class="py-20 px-4 relative z-10">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 font-orbitron">
          Tecnologia de ponta, <span class="text-blue-400">acessível</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="text-center group"
        >
          <div class="relative inline-block mb-6">
            <div class="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div class="relative bg-slate-800 border border-slate-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:border-blue-500/50 transition-colors">
              <Icon :name="feature.icon" class="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h3 class="text-xl font-bold text-white mb-4">{{ feature.title }}</h3>
          <p class="text-slate-400 leading-relaxed max-w-sm mx-auto">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
