<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<template>
  <!-- Hamburger Button -->
  <button 
    @click="toggleMenu"
    class="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
    aria-label="Toggle menu"
  >
    <span 
      class="w-6 h-0.5 bg-slate-100 transition-all duration-300"
      :class="isOpen ? 'rotate-45 translate-y-2' : ''"
    ></span>
    <span 
      class="w-6 h-0.5 bg-slate-100 transition-all duration-300"
      :class="isOpen ? 'opacity-0' : ''"
    ></span>
    <span 
      class="w-6 h-0.5 bg-slate-100 transition-all duration-300"
      :class="isOpen ? '-rotate-45 -translate-y-2' : ''"
    ></span>
  </button>

  <!-- Mobile Menu Overlay -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isOpen"
      @click="closeMenu"
      class="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
    ></div>
  </Transition>

  <!-- Mobile Menu Panel -->
  <Transition
    enter-active-class="transition-transform duration-300"
    leave-active-class="transition-transform duration-300"
    enter-from-class="translate-x-full"
    leave-to-class="translate-x-full"
  >
    <nav 
      v-if="isOpen"
      class="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-slate-900 border-l border-slate-700 z-40 lg:hidden overflow-y-auto"
    >
      <div class="p-8">
        <h2 class="text-2xl font-bold text-white mb-8 font-orbitron">Menu</h2>
        
        <ul class="space-y-6">
          <li>
            <a 
              href="#about" 
              @click="closeMenu"
              class="block text-lg text-slate-300 hover:text-blue-400 transition-colors"
            >
              Sobre Nós
            </a>
          </li>
          <li>
            <a 
              href="#solutions" 
              @click="closeMenu"
              class="block text-lg text-slate-300 hover:text-blue-400 transition-colors"
            >
              Soluções
            </a>
          </li>
          <li>
            <a 
              href="#features" 
              @click="closeMenu"
              class="block text-lg text-slate-300 hover:text-blue-400 transition-colors"
            >
              Diferenciais
            </a>
          </li>
          <li>
            <a 
              href="#target" 
              @click="closeMenu"
              class="block text-lg text-slate-300 hover:text-blue-400 transition-colors"
            >
              Para Quem É
            </a>
          </li>
          <li>
            <a 
              href="#cases" 
              @click="closeMenu"
              class="block text-lg text-slate-300 hover:text-blue-400 transition-colors"
            >
              Cases
            </a>
          </li>
          <li>
            <a 
              href="#process" 
              @click="closeMenu"
              class="block text-lg text-slate-300 hover:text-blue-400 transition-colors"
            >
              Processo
            </a>
          </li>
          <li>
            <a 
              href="#faq" 
              @click="closeMenu"
              class="block text-lg text-slate-300 hover:text-blue-400 transition-colors"
            >
              FAQ
            </a>
          </li>
        </ul>

        <div class="mt-10">
          <a 
            href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um diagnóstico técnico gratuito."
            target="_blank"
            rel="noopener noreferrer"
            class="block w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-lg text-center transition-colors"
          >
            Agendar Diagnóstico
          </a>
        </div>
      </div>
    </nav>
  </Transition>
</template>
