import TaskListComponent from "./components/TaskListComponent.vue";
import TaskShowComponent from "./components/TaskShowComponent.vue";
import TaskCreateComponent from "./components/TaskCreateComponent.vue";
import TaskEditComponent from "./components/TaskEditComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: TaskListComponent,
        name: "task.list",
    },
    {
        path: '/tasks',
        name: 'task.list',
        component: TaskListComponent
    },
    {
        path: '/tasks/create',
        name: 'task.create',
        component: TaskCreateComponent
    },
    {
        path: '/tasks/:taskId',
        name: 'task.show',
        component: TaskShowComponent,
        props: true
    },
    {
        path: '/tasks/:taskId/edit',
        name: 'task.edit',
        component: TaskEditComponent,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
