import { ref, onMounted, onUnmounted } from 'vue';

export const useScrollAnimation = () => {
    const isVisible = ref(false);
    const elementRef = ref<HTMLElement | null>(null);

    onMounted(() => {
        if (!elementRef.value) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        isVisible.value = true;
                        // Optionally unobserve after first intersection
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        observer.observe(elementRef.value);

        onUnmounted(() => {
            if (elementRef.value) {
                observer.unobserve(elementRef.value);
            }
        });
    });

    return {
        isVisible,
        elementRef
    };
};
