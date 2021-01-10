import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCameraComponent } from './add-camera/add-camera.component';
import { CamerasComponent } from './cameras/cameras.component';
const routes: Routes = [
  {path: "cameras", component : CamerasComponent},
  {path: "add-camera", component : AddCameraComponent},
  { path: "", redirectTo: "cameras", pathMatch: "full" }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
