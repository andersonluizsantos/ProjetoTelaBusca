import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listfiles',
  templateUrl: './listfiles.component.html',
  styleUrls: ['./listfiles.component.css']
})
export class ListfilesComponent implements OnInit {

  @Input() listFiles: Array<any>;

  constructor() {
    this.listFiles = new Array<any>();
  }

  ngOnInit() {}

}
