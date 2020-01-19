import { Component, OnInit } from '@angular/core';
import { PersonenService } from '../personen.service';
import { User } from '../model/user';

@Component({
  selector: 'app-lijst',
  templateUrl: './lijst.component.html',
  styleUrls: ['./lijst.component.css']
})
export class LijstComponent implements OnInit {

  constructor(private service: PersonenService) { }
  users: Array<User> = [];
  filtertedUsers:Array<User> = [];

  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers(){
    this.service.getPersonen().subscribe((data:[]) => { 
      this.users = data;
      this.filtertedUsers = data;
    });
  }
  filterByName(user: User, filterValue: string){
    return user.naam.toLowerCase().includes(filterValue.toLowerCase());
  }
  filter(value){
    this.filtertedUsers = this.users.filter(u => this.filterByName(u,value)) as [];
  }
  delete(user: User){
    this.service.deleteUser(user.naam).subscribe(data => {
      let f_index = this.filtertedUsers.findIndex(u => u.naam == user.naam); 
      let index = this.users.findIndex(u => u.naam == user.naam); 
      this.filtertedUsers.splice(f_index, 1);
      this.users.splice(index, 1);
      //this.fetchUsers();

    });
  }

}
