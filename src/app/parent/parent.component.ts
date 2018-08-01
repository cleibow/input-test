import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  sampleData: string ="some parent data";
  sampleChildData: string = '';
  constructor() { }

  ngOnInit() {
  }

  public handleEvent(childData: any){
    this.sampleChildData = childData;
  }

}
