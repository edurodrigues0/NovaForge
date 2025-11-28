<script setup lang="ts">
</script>

<template>
  <section id="contact-form" class="py-20 px-4 relative z-10 bg-slate-900/50">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 font-orbitron">
          Fale <span class="text-blue-400">Conosco</span>
        </h2>
        <p class="text-slate-400 text-lg">
          Preencha o formulário abaixo e entraremos em contato em até 24 horas
        </p>
      </div>

      <div class="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 overflow-hidden">
        <iframe 
          src="https://formlink.vercel.app/jer/formulario-de-contato-nova-forge-solucoes-tecnologicas-para-pmes" 
          width="100%" 
          height="600px" 
          frameborder="0" 
          style="border:0; border-radius: 8px;"
          title="Formulário de Contato Nova Forge"
          loading="lazy"
        ></iframe>
      </div>

      <!-- Alternative contact methods -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <a 
          href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um diagnóstico técnico gratuito."
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-4 bg-green-600/10 border border-green-600/30 hover:border-green-600/50 rounded-xl p-6 transition-all group"
        >
          <div class="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
            <Icon name="uil:whatsapp" class="w-6 h-6 text-green-400" />
          </div>
          <div>
            <div class="text-white font-semibold mb-1">WhatsApp</div>
            <div class="text-slate-400 text-sm">Resposta imediata</div>
          </div>
        </a>

        <a 
          href="mailto:contato@novaforge.com"
          class="flex items-center gap-4 bg-blue-600/10 border border-blue-600/30 hover:border-blue-600/50 rounded-xl p-6 transition-all group"
        >
          <div class="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
            <Icon name="uil:envelope" class="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <div class="text-white font-semibold mb-1">Email</div>
            <div class="text-slate-400 text-sm">contato@novaforge.com</div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
