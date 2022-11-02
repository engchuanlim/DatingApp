import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
//import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: []
//  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]  ,
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);

    }, error => {
      console.log(error);
    })
  }

  logout() {
    this.accountService.logout();
  }



}
