import { Component, OnInit } from '@angular/core';
import { AlerTimeService } from '../data/alerTime.service';
import { User } from '../data/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  user: User | undefined;

  constructor(private alerTimeService: AlerTimeService, private router: Router) { }

  ngOnInit() {
    this.user = this.alerTimeService.getUserByEmail(sessionStorage.getItem("token"));
  }

  logout() {
    sessionStorage.removeItem("token");
    this.user = undefined;
    this.router.navigate(['/alerTime']);
  }
}