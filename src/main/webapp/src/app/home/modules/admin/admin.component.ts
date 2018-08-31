import { Component, OnInit } from '@angular/core';
import { SidenavService } from "../../services/side-nav-service.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private sideNavService: SidenavService) { }

  ngOnInit() {
    this.sideNavService.setSidenav(null);
  }

}
