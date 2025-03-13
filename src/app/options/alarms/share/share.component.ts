import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToAlarms() {
    this.router.navigate(['/options/alarms']);
  }

}
