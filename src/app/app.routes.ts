import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

export const routes: Routes = [
    {path: 'taskList', title: 'listaDeTarefas', component: TaskListComponent},
    {path: 'taskDetails/:id', title: 'detalhes da tarefa', component: TaskDetailsComponent},
    {path: '', redirectTo: 'taskList', pathMatch: 'full'}
];
