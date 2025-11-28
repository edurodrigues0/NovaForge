<script setup lang="ts">
const solutions = [
  {
    icon: 'uil:layer-group',
    title: 'Desenvolvimento Sob Medida',
    subtitle: 'Crie o futuro do seu mercado.',
    description: 'Desenvolvimento de Micro-SaaS, aplicativos móveis e sistemas web complexos. Transformamos sua ideia de Startup ou necessidade interna em um produto digital de alta performance.'
  },
  {
    icon: 'uil:processor',
    title: 'Automação e Processos',
    subtitle: 'Elimine o trabalho manual.',
    description: 'Consultoria e implementação de software para automação industrial e digitalização de processos. Conectamos o chão de fábrica à gestão, reduzindo erros e aumentando a produtividade.'
  },
  {
    icon: 'uil:dashboard',
    title: 'Gestão Digital',
    subtitle: 'Controle total na palma da mão.',
    description: 'Desenvolvimento de Micro-CRMs e painéis administrativos personalizados. Tenha visão clara dos seus dados para tomar decisões estratégicas com segurança.'
  }
]
</script>

<template>
  <section id="solutions" class="py-20 px-4 relative z-10 bg-slate-900/50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 font-orbitron">
          Soluções completas para a <span class="text-blue-400">maturidade digital</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(solution, index) in solutions" 
          :key="index"
          class="bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 group"
        >
          <div class="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
            <Icon :name="solution.icon" class="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
          </div>
          
          <h3 class="text-xl font-bold text-white mb-2">{{ solution.title }}</h3>
          <p class="text-sm font-medium text-blue-400 mb-4">{{ solution.subtitle }}</p>
          <p class="text-slate-400 leading-relaxed">
            {{ solution.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
