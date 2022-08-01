import { Injectable } from '@angular/core';
import { Auth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private router: Router) { }
  //login
  login(value:any){
    signInWithEmailAndPassword(this.auth,value.email,value.password)
    .then(()=>{
      localStorage.setItem('token', JSON.stringify(value))
      const token = localStorage.getItem('token')
      if (token) this.router.navigate(['/pictures'])
    }, err =>{
      alert(err.message)
      this.router.navigate(['/login'])
    })
  }
  //register
  signup(value:any){
    createUserWithEmailAndPassword(this.auth,value.email,value.password)
    .then((res)=>{
      this.router.navigate(['login'])
      alert('successfull')
    }, err =>{
      alert(err.massage)
      this.router.navigate(['signup'])
    })
  }
  //logout
  /* logout(){
    signOut().then(()=>{
      localStorage.removeItem('token')
this.router.navigate(['/'])
    },err =>{
alert(err.massage)
    })
  } */
}


