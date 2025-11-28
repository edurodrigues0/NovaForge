<script setup lang="ts">
import { ref } from 'vue';

const faqs = [
  {
    question: 'Quanto tempo leva um projeto?',
    answer: 'O prazo varia conforme a complexidade. Um MVP pode levar de 4 a 8 semanas, enquanto sistemas mais robustos podem levar de 3 a 6 meses. Durante o diagnóstico, definimos um cronograma realista e detalhado.'
  },
  {
    question: 'Qual o investimento médio?',
    answer: 'Cada projeto é único e o investimento depende do escopo, tecnologias e complexidade. Trabalhamos com transparência total: após o diagnóstico gratuito, apresentamos uma proposta detalhada com valores fixos, sem surpresas.'
  },
  {
    question: 'Vocês atendem minha região?',
    answer: 'Sim! Atendemos clientes em todo o Brasil de forma 100% remota. Utilizamos ferramentas de colaboração modernas para garantir comunicação eficiente. Para projetos locais, também oferecemos reuniões presenciais quando necessário.'
  },
  {
    question: 'Como funciona o diagnóstico técnico gratuito?',
    answer: 'É uma reunião de 60-90 minutos onde entendemos seus desafios, mapeamos oportunidades e sugerimos soluções. Não há compromisso: você recebe insights valiosos mesmo que decida não seguir com o projeto.'
  },
  {
    question: 'Oferecem suporte após a entrega?',
    answer: 'Sim! Todo projeto inclui período de garantia e suporte. Também oferecemos planos de manutenção contínua para evoluções, correções e melhorias. Seu sucesso é nosso sucesso.'
  },
  {
    question: 'Trabalham com quais tecnologias?',
    answer: 'Somos especialistas em Vue.js, Nuxt, React, Node.js, TypeScript e bancos de dados modernos. Escolhemos a stack ideal para cada projeto, priorizando performance, escalabilidade e facilidade de manutenção.'
  }
];

const openIndex = ref<number | null>(null);

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
  <section id="faq" class="py-20 px-4 relative z-10">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 font-orbitron">
          Perguntas <span class="text-blue-400">Frequentes</span>
        </h2>
        <p class="text-slate-400 text-lg">
          Tire suas dúvidas antes de agendar o diagnóstico
        </p>
      </div>

      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden transition-all duration-300"
          :class="openIndex === index ? 'border-blue-500/50' : 'hover:border-slate-600'"
        >
          <button
            @click="toggle(index)"
            class="w-full px-6 py-5 flex items-center justify-between text-left group"
            :aria-expanded="openIndex === index"
          >
            <span class="text-lg font-semibold text-white pr-8 group-hover:text-blue-400 transition-colors">
              {{ faq.question }}
            </span>
            <Icon 
              name="uil:angle-down" 
              class="w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300"
              :class="openIndex === index ? 'rotate-180' : ''"
            />
          </button>
          
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-300 ease-in"
            enter-from-class="max-h-0 opacity-0"
            leave-to-class="max-h-0 opacity-0"
            enter-to-class="max-h-96 opacity-100"
            leave-from-class="max-h-96 opacity-100"
          >
            <div v-show="openIndex === index" class="overflow-hidden">
              <div class="px-6 pb-5 text-slate-300 leading-relaxed">
                {{ faq.answer }}
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
