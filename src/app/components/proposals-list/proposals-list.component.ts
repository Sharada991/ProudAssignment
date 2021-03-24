import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProposalService } from '../../services/proposal.service';
@Component({
  selector: 'app-proposals-list',
  templateUrl: './proposals-list.component.html',
  styleUrls: ['./proposals-list.component.scss'],
})
export class ProposalsListComponent implements OnInit {
  constructor(private router: Router) {}

  proposalList: any = [];
  listofproposal: any = [];
  ngOnInit(): void {
    this.proposalList = JSON.parse(
      String(localStorage.getItem('proposalUsers'))
    );
    console.log(this.proposalList);
  }
  edit(i: any) {
    this.router.navigateByUrl('/app-proposal/' + i);
  }
}
