import { Component, OnInit } from '@angular/core';
import { PersonenService } from '../personen.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toevoegen',
  templateUrl: './toevoegen.component.html',
  styleUrls: ['./toevoegen.component.css']
})
export class ToevoegenComponent implements OnInit {
  user:User = {
    _id:"",
    naam: "",
    datum: ""
  }
  favoriteColor:string;
  constructor(private service: PersonenService, private router: Router) { }

  ngOnInit() {
  }

  toevoegen():void{
    this.service.addPerson(this.user).subscribe(data => {
      this.user = {
        _id:"",
        naam: "",
        datum: ""
      };
      //alert("User toegevoegd!")
      this.router.navigate(['/lijst']);
    })
  }

}
