import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  headers = ['education', 'solo exhibitions', 'showings & awards', 'professional associations & memberships']

  shows = [{header: 'education', year: '1983', details: 'Bachelor of Fine Arts', location: 'Kangneung National University, South Korea'},
  {header: 'solo exhibition', year: '2016', details: 'Camano Island Studio Tour', location: 'Gallery Art by Suki | Camano Island, WA'},
  {header: 'showings & awards', year: '2017', details: 'East Austin Studio Tour - Soma Vida Gallery', location: 'Austin, TX'},
  {header: 'solo exhibitions', year: '2012', details: 'Officer`s Club & Challenger Club', location: 'Osan Air Base, South Korea'}]
  constructor() { }

  ngOnInit() {
  }

}
