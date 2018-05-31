import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import { UserService } from '../../services/UserService';


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.html',
  styleUrls: ['./search-user.css'],
  providers: []
})

export class SearchUserComponent implements OnInit {
    loader : boolean = false;
    userForm: any = {};
    public skilGroup = [
                'angularjs',
                'reactjs',
                'nodejs', 
                'html', 
                'css', 
                'php', 
                'android',
                'java',
                'reactnative',
                'ios'
            ]

    public preferredSourseGroup = [
            'github',
            'linkedin',
            'twiter'
         ];
    public cityGroup = [
               'bangalore',
               'chennai',
               'munbai'
            ];
    
    constructor(public UserService: UserService, private location: Location, private router: Router) {

    }

    ngOnInit() {
    }

    searchUsers(){
        if(this.userForm.skill && this.userForm.city && this.userForm.sourse){
            this.UserService.userFormDetails(this.userForm);
            this.router.navigate(['/user/list/']);
        }    
    }

    clearFilter(){
        this.userForm = {};
    }

}
