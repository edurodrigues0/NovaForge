<script setup lang="ts">
import NavSocialGroup from "./NavSocialGroup.vue";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-slate-950 border-t border-slate-800 pt-16 pb-8 px-4 relative z-10">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h2 class="text-2xl font-bold text-white font-orbitron mb-4">Nova Forge</h2>
          <NavSocialGroup />
        </div>
        
        <div>
          <h3 class="text-white font-bold mb-4">Contato</h3>
          <ul class="space-y-2">
            <li><span class="text-slate-400">Email: contato@novaforge.com</span></li>
            <li><span class="text-slate-400">WhatsApp: (11) 99999-9999</span></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-white font-bold mb-4">Links Rápidos</h3>
          <ul class="space-y-2">
            <li><a href="#about" class="text-slate-400 hover:text-blue-400 transition-colors">Sobre Nós</a></li>
            <li><a href="#solutions" class="text-slate-400 hover:text-blue-400 transition-colors">Soluções</a></li>
            <li><a href="#cases" class="text-slate-400 hover:text-blue-400 transition-colors">Cases</a></li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-slate-800 pt-8 text-center">
        <p class="text-slate-500 text-sm">
          &copy; {{ currentYear }} NovaForge. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>
