<script setup lang="ts">
const detailedServices = [
  {
    title: 'Desenvolvimento de Software Customizado',
    description: 'Criamos soluções sob medida que resolvem problemas reais do seu negócio, com tecnologia de ponta e arquitetura escalável.',
    benefits: [
      'Código limpo e manutenível para facilitar futuras expansões',
      'Arquitetura escalável que suporta crescimento sem limitações',
      'Testes automatizados garantindo qualidade e confiabilidade'
    ]
  },
  {
    title: 'Sistemas Web & Mobile Nativos',
    description: 'Aplicações modernas e intuitivas que proporcionam experiência excepcional em qualquer dispositivo.',
    benefits: [
      'Design responsivo que funciona perfeitamente em todos os dispositivos',
      'Performance otimizada para carregamento rápido e fluido',
      'Interface intuitiva que reduz curva de aprendizado'
    ]
  },
  {
    title: 'Automação Inteligente de Processos',
    description: 'Elimine tarefas manuais e repetitivas com automação inteligente que libera sua equipe para atividades estratégicas.',
    benefits: [
      'Redução de até 80% do tempo em processos repetitivos',
      'Integração com sistemas existentes sem interrupções',
      'Monitoramento em tempo real com alertas inteligentes'
    ]
  }
]
</script>

<template>
  <section class="py-16 sm:py-20 bg-slate-800/50">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl sm:text-4xl font-bold text-slate-100 text-center mb-4">
        Nossos serviços em detalhes
      </h2>
      <p class="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
        Soluções completas que entregam valor real para seu negócio
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          v-for="service in detailedServices"
          :key="service.title"
          class="bg-slate-800/70 p-8 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all"
        >
          <h3 class="text-2xl font-bold text-slate-100 mb-4">{{ service.title }}</h3>
          <p class="text-slate-300 mb-6">{{ service.description }}</p>
          <ul class="space-y-3">
            <li
              v-for="(benefit, index) in service.benefits"
              :key="index"
              class="text-slate-300 flex items-start"
            >
              <span class="text-blue-500 mr-2">✓</span>
              <span>{{ benefit }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>