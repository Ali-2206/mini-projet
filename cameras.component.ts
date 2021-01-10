import { Component, OnInit } from '@angular/core';
import { Camera } from '../model/camera.model';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {
  cameras : Camera[]; //un tableau de Produit
constructor(private cameraService: CameraService ) {
this.cameras = cameraService.listeCamera();
}


  ngOnInit(): void {
  }

}
