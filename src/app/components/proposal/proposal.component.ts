import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProposalService } from '../../services/proposal.service';



@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {
  proposalForm: FormGroup;
  isSubmitted = false;
  user: any = {};
  proposalList: any = [];
  newEditPage: string = 'NEW';
  userId: number;
  constructor( private router: Router, private routes: ActivatedRoute,
  private formBuilder: FormBuilder,
  private proposal: ProposalService) { }

  ngOnInit(): void {
  let selectedUser = null;
  this.routes.params.subscribe(params => {
    if(params.id) {
      this.newEditPage = 'EDIT';
      this.userId = params.id;
      const usersData = localStorage.getItem('proposalUsers');
      if(usersData) {
        selectedUser = JSON.parse(usersData)[this.userId];
        console.log('selected user');
        console.log(selectedUser);
        this.createProposal(selectedUser);
      }
    }
  });

  if(!selectedUser) {
     this.newEditPage = 'NEW';
      this.createProposal(selectedUser);
  }

  }
  createProposal(userData: any){
    this.proposalForm=this.formBuilder.group({
      userName: [userData ? userData.userName : '', Validators.required],
      email: [userData ? userData.email : '', Validators.required ],
      address: [userData ? userData.address : '', Validators.required],
      items: [ userData ? userData.items : '', Validators.required ],
      discount: [userData ? userData.discount : '', Validators.required ],
    });
    
  }
  get formControls() {
    return this.proposalForm.controls;
  }
  submit(){
    this.isSubmitted = true;
    if (this.proposalForm.invalid) {
      return;
    }
    this.proposalList.push(this.proposalForm.value);
    this.proposal.proposalList(this.proposalList)
    console.log("proposal list"+this.proposalList);
console.log(this.proposalForm.value);
this.user = Object.assign(this.user, this.proposalForm.value);
this.proposal.addUpdateUser(this.user, this.userId);
this.router.navigateByUrl('/app-proposals-list');
  }

  ResetForm() {
    this.proposalForm.reset();
  }
}