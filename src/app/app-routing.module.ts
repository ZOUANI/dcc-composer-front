import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RequestCollectionCreateComponent} from './requestCollection/request-collection-create/request-collection-create.component';
import {RequestCollectionLaunchComponent} from './requestCollection/request-collection-launch/request-collection-launch.component';

const routes: Routes = [
  {
    path: 'new',
    component: RequestCollectionCreateComponent,
  },
  {
    path: 'launch',
    component: RequestCollectionLaunchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
