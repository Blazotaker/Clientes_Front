import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService{
    constructor(private authSerivice: AngularFireAuth){}

    login(email: string, password: string){
      return new Promise((resolve, reject) =>{
        this.authSerivice.signInWithEmailAndPassword(email, password)
        .then(datos => resolve(datos),
          error => reject(error)
        );
      });
    }

    logout(){
      this.authSerivice.signOut();
    }

    getAuth(){
      return this.authSerivice.authState.pipe(
        map( auth => auth)
      )
    }

    registrarse(email: string, password: string){
      return new Promise((resolve, reject) => {
        this.authSerivice.createUserWithEmailAndPassword(email,password).then(datos => resolve(datos),
        error => reject(error));
      });
    }
}
