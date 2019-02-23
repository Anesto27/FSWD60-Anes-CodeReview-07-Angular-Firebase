import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ImportantComponent } from './important/important.component';
import { BookPageComponent } from './book-page/book-page.component';

const routes: Routes = [
{
        path:"",component: HomePageComponent
},
{
        path:"Important numbers",component: ImportantComponent
},
{
        path:"My phone book",component: BookPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
