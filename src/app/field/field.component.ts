import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  public show;
  constructor(private mess:DataService) { }

  ngOnInit() {
    this.mess.current_message.subscribe(data=>{
      console.log(data);
      
      this.show=data;
    })
  }

}
