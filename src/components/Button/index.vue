<script setup>
import { computed, toRefs } from 'vue'
const props = defineProps({
    id: String,
    onClick: Function,
    className: String,
    bg: String,
    color: String,
})
const { bg, color, className }  = props;

const clasess = computed(() => {

    const bgColor = 'bg-'+bg;
    const colorText = 'text-'+color;

    return [bgColor, colorText, 'py-1 px-4 rounded-lg', className];
})
console.log(clasess.value)

</script>

<template>
    <button :class="clasess" @click="onClick" >
        <slot></slot>
    </button>
</template>

<style scoped>
    button {
        border: solid 1px red;
    }
    .fp-primary{
        background-color: aqua;
    }
</style>