import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: any;
  @Input() isManage: any;
  id: number = -1;
  @Output() idEvent = new EventEmitter<any>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoDetails(id: number) {
    this.idEvent.emit(id);
    this.router.navigate([`manage/details/${id}`]);
    // this.id = id;
    console.log(this.idEvent.emit(id))
    

  }

}
