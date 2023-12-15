<script setup>
import style from './style';
const props = defineProps({
    id: String,
    onChange: Function,
    modelValue: Boolean,
    label: String,
});

</script>

<template>
    <div :class="style.container">
        <input type="checkbox" :class="style.input" @input="$emit('update:modelValue', $event.target.value)"
            :id="id" :checked="modelValue" @change="onChange($event)" />
        <div
            :class="style.containerIcon">
            <svg :class="style.icon" version="1.1" viewBox="0 0 17 12"
                xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
                        <path
                            d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                    </g>
                </g>
            </svg>
        </div>
        <label :for="id" :class="style.label">{{ label }}</label>
    </div>
</template>

<style scoped>
input:checked+div {
    @apply border-blue-500;
}

input:checked+div svg {
    @apply block;
}
</style>