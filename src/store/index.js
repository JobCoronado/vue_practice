import { createStore } from 'vuex'
//import Vue from 'vue';
export const store = createStore({
    state: {
      tasks: []
    },
    actions:{
        changeStatus(context, task){
            const newTaskList = context.state.tasks.map((taskItem)=> {
                if (task.id === taskItem.id ) {
                    return {
                        ...taskItem,
                        isCompleted: task.isCompleted
                    }
                }
                return taskItem;
            })
            context.commit('updateTask', newTaskList)
        },
        addTask (context, task) {
            const tasks = context.state.tasks;
            context.commit('updateTask', [...tasks, task])
        }, 
    },
    mutations: {
     
      updateTask(state, tasks) {
        
        state.tasks = tasks;
      }
    },
    getters: {
        getTasks (state) {
          return state.tasks;
        },
        getTasksDone (state) {
            return state.tasks.filter((task)=> task.isCompleted );
        },
        getTasksUnDone (state) {
            return state.tasks.filter((task)=> !task.isCompleted );
        }
      }
});