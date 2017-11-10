import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [AboutComponent],
  exports: [ RouterModule],
  imports: [RouterModule.forRoot(routes)]

})
export class AppRoutingModule {}