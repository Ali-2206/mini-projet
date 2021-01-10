import { Component, OnInit } from '@angular/core';
import { Camera } from '../model/camera.model';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-add-camera',
  templateUrl: './add-camera.component.html',
  styleUrls: ['./add-camera.component.css']
})
export class AddCameraComponent implements OnInit {
newCamera= new Camera();
  constructor(private cameraService: CameraService ) { }

  ngOnInit(): void {
  }
  addCamera(){
    //console.log(this.newCamera);
    this.cameraService.ajouterCamera(this.newCamera);
    }

}
