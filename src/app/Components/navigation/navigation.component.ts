import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  defaultPanel: string = 'employe';
  pathString: string = 'employe' ;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   }

  onPanelSwitch(value){
    this.pathString = value === 'employe' ? 'employe' : 'employer' ;
  }
}
