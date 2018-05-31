import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { API_CONFIG } from '../core/Config';
import { Subject }    from 'rxjs/Subject';
import { environment }    from '../../environments/environment';

@Injectable()
export class UserService {
    userFormData:any = {};
    constructor() {
    }

    userFormDetails(formData){
        this.userFormData = formData
    }


    



}
