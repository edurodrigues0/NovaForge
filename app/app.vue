<script setup lang="ts">
const iconSizeClass = 'w-10 h-10'
</script>

<template>
  <NuxtLayout>
    <!-- Hero Section Melhorada -->
    <template #hero>
      <div class="flex flex-col items-center justify-center relative z-10 py-8 sm:py-12">
        <h1
          class="mx-auto mt-4 text-center text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-400 via-slate-300 to-sky-200 bg-clip-text text-transparent leading-tight"
        >
          Forjando tecnologia que
          <br />impulsiona negócios.
        </h1>

        <span class="block mt-4 mx-auto text-center text-2xl sm:text-3xl text-slate-100 font-bold font-orbitron whitespace-nowrap">
          Nova Forge
        </span>

        <p class="block mt-6 mx-auto text-center text-base sm:text-lg text-slate-300 max-w-2xl px-4">
          Transformamos desafios em software robusto, escalável e preparado para crescer junto com você.
        </p>

        <p class="block mt-2 mx-auto text-center text-sm text-blue-400 font-semibold">
          ✨ Diagnóstico gratuito em 24h
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 px-4">
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/50 w-[265px] max-w-full mx-auto block text-base whitespace-nowrap"
            style="min-width: 230px;"
          >
            Agendar Consultoria Grátis
          </button>
          <button
            class="bg-transparent border-2 border-blue-500 text-blue-300 hover:bg-blue-500/20 hover:text-white font-bold py-3 rounded-lg transition-all w-[265px] max-w-full mx-auto block text-base whitespace-nowrap"
            style="min-width: 230px;"
          >
            Ver Projetos
          </button>
        </div>
      </div>
    </template>

    <!-- Conteúdo fora do arco -->
    <div class="bg-transparent mt-10">
      <section class="py-12 sm:py-16">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-100 text-center mb-8">
            Apoiada por +200 empresas em crescimento.
          </h2>
          <div class="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
            <div class="w-16 h-16 sm:w-20 sm:h-20 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-xs font-bold">
              LOGO 1
            </div>
            <div class="w-16 h-16 sm:w-20 sm:h-20 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-xs font-bold">
              LOGO 2
            </div>
            <div class="w-16 h-16 sm:w-20 sm:h-20 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-xs font-bold">
              LOGO 3
            </div>
            <div class="w-16 h-16 sm:w-20 sm:h-20 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-xs font-bold">
              LOGO 4
            </div>
            <div class="w-16 h-16 sm:w-20 sm:h-20 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-xs font-bold">
              LOGO 5
            </div>
            <div class="w-16 h-16 sm:w-20 sm:h-20 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-xs font-bold">
              LOGO 6
            </div>
            <div class="w-16 h-16 sm:w-20 sm:h-20 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-xs font-bold">
              LOGO 7
            </div>
            <div class="w-16 h-16 sm:w-20 sm:h-20 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-xs font-bold">
              LOGO 8
            </div>
          </div>
        </div>
      </section>

      <!-- O que fazemos -->
      <WhatWeDo />

      <!-- Benefícios -->
      <Benefits />

      <!-- Prova Social - Depoimentos -->
      <SocialProof />

      <!-- Processo de Trabalho -->
      <WorkProcess />

      <!-- Serviços Detalhados -->
      <DetailedServices />

      <!-- Oferta Especial -->
      <SpecialOffer />

      <!-- CTA Final -->
      <CTA />

      <!-- Rodapé -->
      <Footer />
    </div>
  </NuxtLayout>
</template>
