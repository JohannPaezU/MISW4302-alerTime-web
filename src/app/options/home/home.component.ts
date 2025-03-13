import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlerTimeService } from 'src/app/data/alerTime.service';
import { User } from 'src/app/data/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User | undefined;

  constructor(private alerTimeService: AlerTimeService, private router: Router) { }

  ngOnInit() {
    this.user = this.alerTimeService.getUserByEmail(sessionStorage.getItem("token"));
  }

}
