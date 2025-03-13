import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css']
})
export class AlarmsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToShare() {
    this.router.navigate(['/options/alarms/share']);
  }
}
