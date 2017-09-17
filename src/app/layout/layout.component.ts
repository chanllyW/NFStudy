import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class NzDemoLayoutTriggerComponent implements OnInit {
  isCollapsed = false;

  constructor() {
  }

  ngOnInit() {
  }
}