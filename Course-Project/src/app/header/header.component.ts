import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() pageMenuClicked = new EventEmitter<string>();
 
  constructor() { }

  ngOnInit() {
  }

  onClicked(data:string){ console.log(data);
    this.pageMenuClicked.emit(data);
  }
}
