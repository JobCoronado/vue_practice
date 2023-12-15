<script setup>
    import CheckBox from '../form/Checkbox/index.vue';
    import style from './style';
    const props = defineProps({
        taskData: Object,
        onSelect:Function,
        onDelete:Function,
    });
    const {taskData, onSelect} = props;
    const onSelectHandled = (event) => {

        const task = {
            ...taskData,
            isCompleted:event.target.checked,
        }

        onSelect(task)
    }
</script>

<template>
    <div :class="style.container">
        <CheckBox :onChange="onSelectHandled" :modelValue="taskData.isCompleted"/>
        <div :class="style.description">
            {{ taskData.description }}
        </div>
    </div>
</template>

<style scoped>
    
</style>