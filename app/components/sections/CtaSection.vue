<script setup lang="ts">
</script>

<template>
  <section class="py-24 px-4 relative z-10">
    <div class="max-w-5xl mx-auto bg-gradient-to-br from-blue-900/50 to-slate-900 border border-blue-500/30 rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden">
      <!-- Background Glow -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/10 blur-3xl -z-10"></div>
      
      <h2 class="text-3xl sm:text-5xl font-bold text-white mb-6 font-orbitron">
        Sua empresa está pronta para o <br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">próximo nível?</span>
      </h2>
      
      <p class="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
        Não deixe gargalos operacionais limitarem seu crescimento. Vamos conversar e desenhar a solução ideal para o seu momento.
      </p>
      
      <a 
        href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um diagnóstico técnico gratuito."
        target="_blank"
        rel="noopener noreferrer"
        class="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl shadow-blue-900/20 text-lg inline-flex items-center gap-2"
      >
        <Icon name="uil:whatsapp" class="w-6 h-6" />
        Quero Agendar Meu Diagnóstico Técnico
      </a>
    </div>
  </section>
</template>
