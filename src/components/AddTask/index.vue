<script setup>
import Input from '../form/Input/index.vue';
import Button from '../Button/index.vue';
import { ref } from 'vue';
import { mapActions } from '../../store/lib';
import style from './style';
const taskDescription = ref('');
const { addTask } = mapActions();
function onAddTaskHandled() {
    const task = {
        description: taskDescription.value, 
        id: self.crypto.randomUUID(), 
        isCompleted: false
    }
    addTask(task);
    taskDescription.value = '';

}
</script>

<template>
    <div :class="style.container">
        <Input v-model="taskDescription" placeholder="Write your task" />
        <Button bg="primary" color="white" :class-name="style.button" @click="onAddTaskHandled">Añadir</Button>
    </div>
</template>

<style scoped></style>