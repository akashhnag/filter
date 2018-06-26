import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent implements OnInit {
  public details=[  
    {"name":"Ram", "email":"Ram@gmail.com"},  
    {"name":"Bob", "email":"bob32@gmail.com"}, 
      {"name":"shyam", "email":"shyam@gmail.com"},  
      {"name":"john", "email":"john32@gmail.com"},
      {"name":"amir", "email":"amir@gmail.com"},  
      {"name":"vivek", "email":"vivek@gmail.com"}  
      
]  
  constructor(private mess:DataService) { }

  ngOnInit() {
    this.mess.current_message.subscribe();
    
  }
  
}
