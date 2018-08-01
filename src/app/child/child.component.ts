import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '../../../node_modules/protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // output sends data in the form of events
  // attaching Event emitter to output decorater 
  @Output('childData') outGoingData = new EventEmitter();
  parentData: string = '';
  sampleChildData: string= 'some child data';

  


  constructor() { }

  ngOnInit() {
  }

  // send data to whichever component is listening
  public sendData(data:any){
    this.outGoingData.emit(data);
  }
}
