import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CounterComponent } from './basic/counter/counter.component';
import { CharizardComponent } from './basic/charizard/charizard.component';
import { FatherComponent } from './basic/father/father.component';

const routes: Routes = [
  {
    path: 'basic/counter',
    component: CounterComponent,
  },
  {
    path: 'basic/charizard',
    component: CharizardComponent,
  },
  {
    path: 'basic/father',
    component: FatherComponent
  },
  {
    path: '**',
    redirectTo: 'basic/counter',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
