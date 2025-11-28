<script setup lang="ts">
const targets = [
  {
    title: 'PMEs em Crescimento',
    description: 'Empresas que buscam modernização e escalabilidade sem comprometer o orçamento.',
    icon: 'uil:store',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Indústrias',
    description: 'Fábricas que precisam automatizar processos e conectar o chão de fábrica à gestão.',
    icon: 'uil:cog',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Startups',
    description: 'Empreendedores com ideias inovadoras que precisam de um MVP robusto e escalável.',
    icon: 'uil:rocket',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Profissionais Liberais',
    description: 'Consultores, personal trainers e outros profissionais que querem digitalizar serviços.',
    icon: 'uil:user-md',
    color: 'from-green-500 to-teal-500'
  }
]
</script>

<template>
  <section id="target" class="py-20 px-4 relative z-10">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 font-orbitron">
          Para quem <span class="text-blue-400">desenvolvemos</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Soluções personalizadas para diferentes perfis de negócio
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(target, index) in targets" 
          :key="index"
          class="group relative bg-slate-800/40 border border-slate-700 hover:border-transparent rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
        >
          <!-- Gradient overlay on hover -->
          <div 
            class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br"
            :class="target.color"
          ></div>
          
          <div class="relative z-10">
            <div 
              class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br"
              :class="target.color"
            >
              <Icon :name="target.icon" class="w-8 h-8 text-white" />
            </div>
            
            <h3 class="text-xl font-bold text-white mb-3">{{ target.title }}</h3>
            <p class="text-slate-400 leading-relaxed text-sm">
              {{ target.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
