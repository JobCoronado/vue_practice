<script setup>
import { computed } from 'vue'
import TaskItem from '../TaskItem/index.vue';
import { useStore } from 'vuex';
import style from './style';
const store = useStore();
const props = defineProps({
    tasks: Array,
    title: String
});
const onSelectTask = (task) => {
    store.dispatch('changeStatus', task);
}

const isListEmpty = computed(() => {
    return props.tasks.length > 0
})

</script>

<template>
    <div :class="style.container">
        <h2 :class="style.title" v-if="isListEmpty">{{ title }}</h2>
        <TaskItem v-for="(task) in tasks" :key="task.id" :taskData="task" :on-select="onSelectTask" />
    </div>
</template>

<style scoped></style>