import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { FinishedTaskComponent } from './finished-task/finished-task.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/list-tasks', pathMatch: 'full'},
  {path : 'add-task', component:AddTaskComponent},
  {path : 'list-tasks', component: ListTasksComponent},
  {path : 'finished-tasks', component: FinishedTaskComponent},
  {path : '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




