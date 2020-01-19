import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { PersonenService } from '../personen.service';

@Component({
  selector: 'app-zoeken',
  templateUrl: './zoeken.component.html',
  styleUrls: ['./zoeken.component.css']
})
export class ZoekenComponent implements OnInit {
  userToUpdate: User = {
    _id:"",
    naam:"",
    datum: ""
  }
  constructor(private route: ActivatedRoute, private service: PersonenService, private router: Router) { }

  ngOnInit() {
    let userName = this.route.snapshot.paramMap.get('name');
    this.service.getPerson(userName).subscribe((data: User) => {
      this.userToUpdate = data;
    })
  }
  update(){
    this.service.updatePerson(this.userToUpdate).subscribe(data => {
      
      this.router.navigate(['/lijst']);
    })
  }
}
