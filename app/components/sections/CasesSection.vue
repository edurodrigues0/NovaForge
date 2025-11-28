<script setup lang="ts">
const cases = [
  {
    name: 'FormLink',
    type: 'SaaS B2B',
    challenge: 'Criar mais do que um simples formulário.',
    solution: 'Uma plataforma inteligente com Micro-CRM nativo. Gerencia todo o ciclo de vida do lead dentro da ferramenta, eliminando softwares terceiros complexos.',
    tags: ['SaaS', 'CRM', 'Vue.js']
  },
  {
    name: 'AlugaBike',
    type: 'Economia Compartilhada',
    challenge: 'Conectar proprietários e usuários com segurança.',
    solution: 'Marketplace P2P completo. Gestão de disponibilidade, pagamentos e segurança em tempo real, facilitando a mobilidade urbana.',
    tags: ['Marketplace', 'P2P', 'Real-time']
  },
  {
    name: 'Vitrine.Shop',
    type: 'Varejo O2O',
    challenge: 'Digitalizar o comércio local rapidamente.',
    solution: 'Vitrine digital ágil. Permite publicação instantânea de catálogos, integrando vendas online com o tráfego da loja física.',
    tags: ['E-commerce', 'O2O', 'Mobile']
  },
  {
    name: 'FitFlow Personal',
    type: 'HealthTech',
    challenge: 'Aumentar a produtividade de personal trainers.',
    solution: 'Gestão financeira e de treinos em um só lugar. Foco na evolução do aluno e na saúde financeira do profissional.',
    tags: ['HealthTech', 'Gestão', 'App']
  }
]
</script>

<template>
  <section id="cases" class="py-20 px-4 relative z-10 bg-slate-900/30">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-2 font-orbitron">
            Quem confia na nossa <span class="text-blue-400">transformação</span>
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="(project, index) in cases" 
          :key="index"
          class="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/30 transition-colors group"
        >
          <div class="flex justify-between items-start mb-4">
            <div>
              <span class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 block">{{ project.type }}</span>
              <h3 class="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">{{ project.name }}</h3>
            </div>
          </div>
          
          <div class="space-y-3 mb-6">
            <div>
              <span class="text-slate-500 text-sm font-semibold">Desafio:</span>
              <p class="text-slate-300 text-sm">{{ project.challenge }}</p>
            </div>
            <div>
              <span class="text-slate-500 text-sm font-semibold">Solução:</span>
              <p class="text-slate-300 text-sm">{{ project.solution }}</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in project.tags" 
              :key="tag"
              class="text-xs bg-slate-700/50 text-slate-400 px-3 py-1 rounded-full border border-slate-600"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
