import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';
import { UserService } from '../../services/UserService';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.html',
  styleUrls: ['./user-details.css'],
  providers: []
})
export class UserDetailsComponent implements OnInit {
  	userDetails:any;
  	userSubDetails:any;
  	userForm: any = {};
  	userNotFound:boolean = false;
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
  		
  		this.userDetails = [{'id':'1','name':'Manikandan','skill':[{'value':'angularjs'},{'display_name':'Angular Js'}],'city':[{'value':'bangalore'},{'display_name':'Bangalore'}], 'sourse':[{'value':'github'},{'display_name':'Github'}]},
			{'id':'2','name':'Kathir','skill':[{'value':'reactjs'},{'display_name':'React Js'}],'city':[{'value':'coimbatore'},{'display_name':'Coimbatore'}], 'sourse':[{'value':'linkedin'},{'display_name':'Linked In'}]},
			{'id':'3','name':'Sudhakar','skill':[{'value':'android'},{'display_name':'Android'}],'city':[{'value':'mumbai'},{'display_name':'Mumbai'}], 'sourse':[{'value':'linkedin'},{'display_name':'Linked In'}]},
			{'id':'4','name':'Karthi','skill':[{'value':'css'},{'display_name':'CSS'}],'city':[{'value':'chennai'},{'display_name':'Chennai'}], 'sourse':[{'value':'twiter'},{'display_name':'Twiter'}]},
			{'id':'5','name':'Nava','skill':[{'value':'html'},{'display_name':'HTML'}],'city':[{'value':'chennai'},{'display_name':'Chennai'}], 'sourse':[{'value':'twiter'},{'display_name':'Twiter'}]},
			{'id':'6','name':'Sunil','skill':[{'value':'css'},{'display_name':'CSS'}],'city':[{'value':'chennai'},{'display_name':'chennai'}], 'sourse':[{'value':'twiter'},{'display_name':'Twiter'}]},
			{'id':'7','name':'Kunthan','skill':[{'value':'nodejs'},{'display_name':'Node Js'}],'city':[{'value':'bangalore'},{'display_name':'Bangalore'}], 'sourse':[{'value':'twiter'},{'display_name':'Twiter'}]},
			{'id':'8','name':'Arun','skill':[{'value':'android'},{'display_name':'Android'}],'city':[{'value':'mumbai'},{'display_name':'Mumbai'}], 'sourse':[{'value':'linkedin'},{'display_name':'Linked In'}]},
			{'id':'9','name':'Gobal','skill':[{'value':'android'},{'display_name':'Android'}],'city':[{'value':'mumbai'},{'display_name':'Mumbai'}], 'sourse':[{'value':'linkedin'},{'display_name':'Linked In'}]},
			{'id':'10','name':'Gowtham','skill':[{'value':'reactnative'},{'display_name':'React Native'}],'city':[{'value':'bangalore'},{'display_name':'Bangalore'}], 'sourse':[{'value':'github'},{'display_name':'Github'}]},
			{'id':'11','name':'Rakesh','skill':[{'value':'angularjs'},{'display_name':'Angular Js'}],'city':[{'value':'bangalore'},{'display_name':'Bangalore'}], 'sourse':[{'value':'github'},{'display_name':'Github'}]},
			{'id':'12','name':'Kunal','skill':[{'value':'angularjs'},{'display_name':'Angular Js'}],'city':[{'value':'bangalore'},{'display_name':'Bangalore'}], 'sourse':[{'value':'github'},{'display_name':'Github'}]},
			{'id':'13','name':'Parthi','skill':[{'value':'java'},{'display_name':'Java'}],'city':[{'value':'bangalore'},{'display_name':'Bangalore'}], 'sourse':[{'value':'github'},{'display_name':'Github'}]},
			{'id':'14','name':'Kannan','skill':[{'value':'reactjs'},{'display_name':'React Js'}],'city':[{'value':'bangalore'},{'display_name':'Bangalore'}], 'sourse':[{'value':'linkedin'},{'display_name':'Linked In'}]},
			{'id':'15','name':'Barath','skill':[{'value':'ios'},{'display_name':'IOS'}],'city':[{'value':'bangalore'},{'display_name':'Bangalore'}], 'sourse':[{'value':'linkedin'},{'display_name':'Linked In'}]}
  		]

  		this.userSubDetails = this.userDetails;

  }

  	ngOnInit() {
  		this.userForm = this.UserService.userFormData;
  		if(Object.keys(this.UserService.userFormData).length != 0){
  			this.filterUserData(this.userForm);
  		}
  		
  	}

  	searchUsers(form){
        if(form.valid){
            this.filterUserData(this.userForm)
        }    
    }

    filterUserData(userForm){
    	this.userSubDetails = [];
    	this.userDetails.forEach((element, index) => {
      	  if(userForm.skill == element.skill[0].value && userForm.sourse  == element.sourse[0].value && userForm.city == element.city[0].value){
      	  	  this.userSubDetails.push(element);
      	  }
        })
        if(this.userSubDetails.length == 0){
        	this.userNotFound = true;
        }
    }

    clearFilter(){
    	this.userForm = {};
    	this.userSubDetails = this.userDetails;
    	this.userNotFound = false;
    }

}
