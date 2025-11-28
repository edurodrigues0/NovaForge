<script setup lang="ts">
const stats = [
  {
    number: '50+',
    label: 'Projetos Entregues',
    icon: 'uil:check-circle'
  },
  {
    number: '40%',
    label: 'Aumento Médio de Produtividade',
    icon: 'uil:chart-line'
  },
  {
    number: '100%',
    label: 'Clientes Satisfeitos',
    icon: 'uil:smile'
  },
  {
    number: '5+',
    label: 'Anos de Experiência',
    icon: 'uil:award'
  }
]
</script>

<template>
  <section class="py-16 px-4 relative z-10 bg-gradient-to-b from-slate-900/50 to-transparent">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="text-center group"
        >
          <div class="mb-4 flex justify-center">
            <div class="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <Icon :name="stat.icon" class="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div class="text-4xl sm:text-5xl font-bold text-white mb-2 font-orbitron">
            {{ stat.number }}
          </div>
          <div class="text-slate-400 text-sm sm:text-base">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
