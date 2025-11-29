<script setup lang="ts">
const process = [
  {
    step: '01',
    title: 'Diagnóstico Gratuito',
    description: 'Análise completa do seu negócio para identificar oportunidades de melhoria.'
  },
  {
    step: '02',
    title: 'Proposta Personalizada',
    description: 'Solução customizada com escopo, prazos e investimento transparentes.'
  },
  {
    step: '03',
    title: 'Desenvolvimento Ágil',
    description: 'Metodologia ágil com entregas incrementais e feedback constante.'
  },
  {
    step: '04',
    title: 'Lançamento + Suporte',
    description: 'Deploy seguro e suporte contínuo para garantir o sucesso da solução.'
  }
]
</script>

<template>
  <section class="py-16 sm:py-20">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl sm:text-4xl font-bold text-slate-100 text-center mb-4">
        Como trabalhamos
      </h2>
      <p class="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
        Um processo transparente e eficiente em 4 passos
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="step in process"
          :key="step.step"
          class="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all relative"
        >
          <div class="text-4xl font-bold text-blue-500/50 mb-4">{{ step.step }}</div>
          <h3 class="text-xl font-bold text-slate-100 mb-3">{{ step.title }}</h3>
          <p class="text-slate-300 text-sm">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>