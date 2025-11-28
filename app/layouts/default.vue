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
    <div
        class="star-background min-h-screen overflow-hidden relative font-sans"
    >
        <div id="stars" :style="{ boxShadow: shadowsSmall }"></div>
        <div id="stars2" :style="{ boxShadow: shadowsMedium }"></div>
        <div id="stars3" :style="{ boxShadow: shadowsBig }"></div>

        <div class="relative z-10">
            <Header />
            <slot />
        </div>
    </div>
</template>

<style>
.star-background {
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}

#stars,
#stars2,
#stars3 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
}

#stars {
    width: 1px;
    height: 1px;
    animation: animStar 50s linear infinite;
}

#stars::after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: inherit;
}

#stars2 {
    width: 2px;
    height: 2px;
    animation: animStar 100s linear infinite;
}

#stars2::after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: inherit;
}

#stars3 {
    width: 3px;
    height: 3px;
    animation: animStar 150s linear infinite;
}

#stars3::after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: inherit;
}

@keyframes animStar {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-2000px);
    }
}
</style>
