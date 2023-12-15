<script setup>
    import { computed, ref } from 'vue'
    import style from './style'
    import TaskList from '../../components/TaskList/index.vue'
    import AddTask from '../../components/AddTask/index.vue'
    import { mapGetters } from '../../store/lib'
    const { getTasksDone, getTasksUnDone } = mapGetters()
    
</script>

<template>
    <div :class="style.container">
       <div class="w-full max-w-screen-md">
        <AddTask />
        <TaskList :tasks="getTasksDone"  title="Task Completed"/>
        <TaskList :tasks="getTasksUnDone"  title="Task not Completed"/>
       </div>
    </div>
</template>

<style scoped></style>