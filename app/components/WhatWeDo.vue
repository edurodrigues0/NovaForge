<script setup lang="ts">
const services = [
  {
    title: 'Desenvolvimento de Software',
    description: 'Soluções customizadas que se adaptam ao seu negócio e crescem junto com você.'
  },
  {
    title: 'Sistemas Web & Mobile',
    description: 'Aplicações modernas e responsivas que seus clientes vão adorar usar.'
  },
  {
    title: 'Automação de Processos',
    description: 'Elimine tarefas repetitivas e libere sua equipe para o que realmente importa.'
  },
  {
    title: 'Integração de Sistemas',
    description: 'Conecte todas as suas ferramentas em uma única plataforma integrada.'
  },
  {
    title: 'IA Aplicada a Negócios',
    description: 'Inteligência artificial que otimiza decisões e aumenta sua competitividade.'
  },
  {
    title: 'Smart Contracts',
    description: 'Contratos inteligentes seguros e transparentes para operações automatizadas.'
  }
]
</script>

<template>
  <section class="py-16 sm:py-20 bg-slate-800/50">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl sm:text-4xl font-bold text-slate-100 text-center mb-4">
        O que fazemos
      </h2>
      <p class="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
        Soluções tecnológicas que transformam desafios em vantagens competitivas
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-slate-800/70 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all hover:scale-105"
        >
          <h3 class="text-xl font-bold text-slate-100 mb-3">{{ service.title }}</h3>
          <p class="text-slate-300">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>