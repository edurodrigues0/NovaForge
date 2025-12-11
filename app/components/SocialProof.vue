<script setup lang="ts">
const testimonials = [
  {
    name: 'Maria Silva',
    role: 'CEO, TechStart',
    text: 'A Nova Forge transformou nossa operação. Reduzimos custos em 35% e aumentamos a produtividade em 60%.',
    result: '35% redução de custos | 60% aumento de produtividade'
  },
  {
    name: 'João Santos',
    role: 'Diretor, Inovação Corp',
    text: 'O sistema desenvolvido superou todas as expectativas. Nossos clientes notaram a diferença imediatamente.',
    result: 'Satisfação do cliente: 98% | ROI: 250% em 6 meses'
  },
  {
    name: 'Ana Costa',
    role: 'CTO, Growth Solutions',
    text: 'Profissionalismo e entrega no prazo. A equipe da Nova Forge entendeu perfeitamente nossas necessidades.',
    result: '100% das entregas no prazo | 95% de satisfação'
  }
]
</script>

<template>
  <section class="py-16 sm:py-20 bg-slate-800/50">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl sm:text-4xl font-bold text-slate-100 text-center mb-4">
        Resultados que falam por si
      </h2>
      <p class="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
        Empresas que confiaram na Nova Forge e transformaram seus negócios
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="bg-slate-800/70 p-6 rounded-lg border border-slate-700"
        >
          <p class="text-slate-300 mb-4 italic">"{{ testimonial.text }}"</p>
          <div class="border-t border-slate-700 pt-4">
            <p class="text-slate-100 font-bold">{{ testimonial.name }}</p>
            <p class="text-slate-400 text-sm">{{ testimonial.role }}</p>
            <p class="text-blue-400 text-sm font-semibold mt-2">{{ testimonial.result }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>