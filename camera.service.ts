import { Injectable } from '@angular/core';
import { Camera } from '../model/camera.model';
@Injectable({
providedIn: 'root'
})
export class CameraService {
[x: string]: any;
static listeCameras(): Camera[] {
  throw new Error('Method not implemented.');
}
cameras : Camera[]; //un tableau de Produit
constructor() {
this.cameras = [
  {idCamera : 1, nomCamera : "Camera professionelle", prixCamera  : 5000.500, dateCreation : new Date("01/14/2011")},
  {idCamera  : 2, nomCamera  : "Camera de surveillance", prixCamera  : 700, dateCreation : new Date("12/17/2010")},
  {idCamera  : 3, nomCamera  :"Camera sténopé", prixCamera  : 900.123, dateCreation : new Date("02/20/2020")}
];
}
listeCameras():Camera[] {
  return this.cameras;
}
ajouterCamera( prod: Camera){
this.cameras.push(prod);
}
}