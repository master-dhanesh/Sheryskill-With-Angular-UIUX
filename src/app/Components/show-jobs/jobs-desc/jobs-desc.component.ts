import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-jobs-desc',
  templateUrl: './jobs-desc.component.html',
  styleUrls: ['./jobs-desc.component.css']
})
export class JobsDescComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onApplyNow(){
    this.router.navigate(['/submit-resume'])
  }

}
