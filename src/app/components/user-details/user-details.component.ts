import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  [x: string]: any;
  user: any;
  @Input() userInfo = {};
  userFullName: string;
  constructor() {}

  ngOnInit(): void {
    this.user = localStorage.getItem('UserName');
    //    console.log(this.user+'user');
    //    this.user = JSON.parse(String(localStorage.getItem('Users')));
    // console.log(this.user.username);
  }
  setUserInfo() {
    const agentFirstName = this.agentInfo['userName'] || '';
    this.agentFullName = `${agentFirstName}`;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['agentInfo']) {
      this.setUserInfo();
    }
  }
}
