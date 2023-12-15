<script setup>
    import style from './style';
    const props = defineProps({
        id: String,
        onChange: Function,
        modelValue: String,
        placeholder: String,
        label: String,
        type:String
    });
    defineEmits(['update:modelValue']);
</script>

<template>
    <div :class="style.container">
        <label :class="style.label">
            {{ label }}
            <input 
                :class="style.input" 
                :id="id" 
                :value="modelValue" 
                :type="type"   
                :placeholder="placeholder"
                @input="$emit('update:modelValue', $event.target.value)"
            >
        </label>
    </div>
</template>