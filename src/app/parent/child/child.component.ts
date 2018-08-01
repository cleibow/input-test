import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '../../../../node_modules/protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('parentData') incomingData: string;

  @Output('childData') outGoingData;

  childSampleData: string = "some child data"

  constructor() { }

  ngOnInit() {
  }

  public sendData(data:any){
    this.outGoingData.emit(data);  
  }


}
