<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Reunião inicial gratuita para entender seus desafios e mapear oportunidades.',
    icon: 'uil:search',
    duration: '1-2 dias'
  },
  {
    number: '02',
    title: 'Proposta',
    description: 'Plano personalizado com escopo, cronograma e investimento detalhados.',
    icon: 'uil:file-alt',
    duration: '2-3 dias'
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Sprints ágeis com entregas incrementais e feedback contínuo.',
    icon: 'uil:code',
    duration: 'Variável'
  },
  {
    number: '04',
    title: 'Entrega & Suporte',
    description: 'Deploy em produção, treinamento da equipe e suporte contínuo.',
    icon: 'uil:rocket',
    duration: 'Ongoing'
  }
]
</script>

<template>
  <section id="process" class="py-20 px-4 relative z-10 bg-slate-900/30">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 font-orbitron">
          Como <span class="text-blue-400">trabalhamos</span>
        </h2>
        <p class="text-slate-400 text-lg">
          Processo transparente e colaborativo do início ao fim
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        <!-- Connection lines (hidden on mobile) -->
        <div class="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          class="relative"
        >
          <!-- Step card -->
          <div class="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group">
            <!-- Step number badge -->
            <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/50">
              {{ step.number }}
            </div>
            
            <!-- Icon -->
            <div class="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 mt-4 group-hover:bg-blue-500/20 transition-colors">
              <Icon :name="step.icon" class="w-8 h-8 text-blue-400" />
            </div>
            
            <!-- Content -->
            <h3 class="text-xl font-bold text-white mb-3">{{ step.title }}</h3>
            <p class="text-slate-400 leading-relaxed text-sm mb-4">
              {{ step.description }}
            </p>
            
            <!-- Duration badge -->
            <div class="inline-flex items-center gap-2 text-xs text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
              <Icon name="uil:clock" class="w-4 h-4" />
              {{ step.duration }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
