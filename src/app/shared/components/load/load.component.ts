import { AppService } from './../../../../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent {

  constructor(public appService: AppService) { }


}
