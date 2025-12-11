<script setup lang="ts">
import { ref, onMounted } from "vue";

const generateShadows = (n: number): string => {
    let value = `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
    for (let i = 2; i <= n; i++) {
        value += `, ${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
    }
    return value;
};

const shadowsSmall = ref("");
const shadowsMedium = ref("");
const shadowsBig = ref("");

onMounted(() => {
    shadowsSmall.value = generateShadows(700);
    shadowsMedium.value = generateShadows(200);
    shadowsBig.value = generateShadows(100);
});
</script>

<template>
    <div class="min-h-screen bg-slate-900 overflow-x-hidden relative font-sans">
        <!-- CONTAINER COM ARCO + GLOW -->
        <div class="relative neon-container">
            <!-- Estrelas - contidas dentro do arco -->
            <div class="stars-container">
                <div id="stars" :style="{ boxShadow: shadowsSmall }"></div>
                <div id="stars2" :style="{ boxShadow: shadowsMedium }"></div>
                <div id="stars3" :style="{ boxShadow: shadowsBig }"></div>
            </div>

            <!-- Conteúdo visível dentro do arco (Header + hero) -->
            <div class="content-wrapper">
                <Header />
                <slot name="hero" />
            </div>
        </div>

        <!-- Conteúdo fora do arco (restante da LP) -->
        <div class="relative z-10">
            <slot />
        </div>
    </div>
</template>


<style scoped>
.neon-container {
    background: radial-gradient(
        circle at bottom,
        rgba(59, 130, 246, 0.35) 0%,
        rgba(30, 58, 138, 0.9) 60%,
        #090a0f 100%
    );
    position: relative;
    min-height: 40vh;
    width: 120%;
    left: -10%;
    padding-bottom: 100px;

    /* ARREDONDAMENTO */
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;

    /* SUAVE BRILHO AZUL EMBAIXO */
    box-shadow: 0 40px 120px rgba(59, 130, 246, 0.45);
}

/* Container das estrelas - contido dentro do arco */
.stars-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    pointer-events: none;
}

/* Conteúdo visível - NÃO cortado */
.content-wrapper {
    position: relative;
    z-index: 10;
    width: calc(100vw);
    margin-left: calc((100% - 100vw) / 2);
    padding: 0 1rem;
}

/* Estrelas */
#stars, #stars2, #stars3 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: transparent;
}

#stars { width: 1px; height: 1px; animation: animStar 50s linear infinite; }
#stars2 { width: 2px; height: 2px; animation: animStar 100s linear infinite; }
#stars3 { width: 3px; height: 3px; animation: animStar 150s linear infinite; }

#stars::after, #stars2::after, #stars3::after {
    content: "";
    position: absolute;
    top: 2000px;
    width: inherit;
    height: inherit;
    background: transparent;
    box-shadow: inherit;
}

@keyframes animStar {
    from { transform: translateY(0px); }
    to { transform: translateY(-2000px); }
}
</style>
