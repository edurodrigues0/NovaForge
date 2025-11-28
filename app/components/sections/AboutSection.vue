<script setup lang="ts">
const { isVisible, elementRef } = useScrollAnimation();
</script>

<template>
  <section 
    id="about" 
    ref="elementRef"
    class="py-20 px-4 relative z-10 transition-all duration-1000"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
  >
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6 font-orbitron">
            Mais que código, <span class="text-blue-400">entregamos eficiência.</span>
          </h2>
          <div class="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              Não somos apenas uma fábrica de software. A <strong class="text-white">Nova Forge</strong> é um hub de tecnologia e transformação digital focado em resultados reais.
            </p>
            <p>
              Entendemos que Pequenas e Médias Empresas (PMEs) enfrentam desafios únicos. Por isso, mergulhamos na sua operação para identificar gargalos e desenvolver soluções sob medida.
            </p>
            <p>
              Nosso DNA é resolutivo: eliminamos a complexidade desnecessária para entregar ferramentas que funcionam, crescem com você e geram valor desde o primeiro dia.
            </p>
          </div>
        </div>
        
        <div class="relative">
          <div class="aspect-video rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 flex items-center justify-center relative overflow-hidden group">
            <div class="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Icon name="uil:circuit" class="w-32 h-32 text-blue-500/20 group-hover:text-blue-400/30 transition-colors duration-500" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
