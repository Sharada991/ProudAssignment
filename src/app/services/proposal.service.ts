import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProposalService {
  list = [];
  proposal: string;
  constructor() {}
  addUpdateUser(user: any, userId: number) {
    let users = [];
    if (localStorage.getItem('proposalUsers')) {
      users = JSON.parse(String(localStorage.getItem('proposalUsers')));
      if (userId) {
        users.splice(userId, 1, user);
      } else {
        users = [...users, user];
      }
    } else {
      users = [user];
    }
    localStorage.setItem('proposalUsers', JSON.stringify(users));
  }
  proposalList(data: any) {
    this.list = data;
  }
  getList() {
    return this.list;
  }
}
