<script setup lang="ts">
const benefits = [
  {
    title: 'Redução de Custos',
    description: 'Otimize processos e reduza gastos operacionais em até 40%.'
  },
  {
    title: 'Escalabilidade',
    description: 'Soluções que crescem junto com seu negócio, sem limitações.'
  },
  {
    title: 'Aumento de Eficiência',
    description: 'Automatize tarefas e multiplique a produtividade da sua equipe.'
  },
  {
    title: 'Segurança',
    description: 'Proteção de dados com as melhores práticas e certificações do mercado.'
  },
  {
    title: 'Suporte Dedicado',
    description: 'Equipe especializada disponível para garantir o sucesso do seu projeto.'
  },
  {
    title: 'Transparência Total',
    description: 'Acompanhamento em tempo real com relatórios claros e objetivos.'
  }
]
</script>

<template>
  <section class="py-16 sm:py-20">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl sm:text-4xl font-bold text-slate-100 text-center mb-4">
        Por que escolher a Nova Forge?
      </h2>
      <p class="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
        Benefícios reais que fazem a diferença no seu negócio
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="benefit in benefits"
          :key="benefit.title"
          class="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all"
        >
          <div class="text-4xl mb-4">{{ benefit.icon }}</div>
          <h3 class="text-xl font-bold text-slate-100 mb-2">{{ benefit.title }}</h3>
          <p class="text-slate-300">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>