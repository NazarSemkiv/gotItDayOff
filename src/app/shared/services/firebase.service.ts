import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  userData: any; // Save logged in user data
  admin = new BehaviorSubject(false);
  crntUser = {
    email: ''
  };

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        if ((this.crntUser.email == 'semkiv.n.i@gmail.com') && (user.email != 'semkiv.n.i@gmail.com')) {
          this.admin.next(true);
          localStorage.setItem('user', JSON.stringify(this.crntUser));
          JSON.parse(localStorage.getItem('user'));
        } else {
          this.userData = user;
          if (user.email == 'semkiv.n.i@gmail.com') {
            this.admin.next(true);
          } else {
            this.admin.next(false);
          }
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));
          if (user.email == 'semkiv.n.i@gmail.com') {
            this.crntUser = JSON.parse(localStorage.getItem('user'));
          }
        }
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
        this.crntUser = {
          email: ''
        };
      }
    });
  }

  // Returns true when user is logged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return !!user;
  }

  // check admin
  checkAdmin() {
    return this.admin.asObservable();
  }

  // get current user
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  // Sign in with email/password
  signIn(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['menu/calendar']);
      }).catch((error) => {
      window.alert(error.message);
    });
  }

  // Sign out
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
      this.admin.next(false);
    });
  }


  // CRUD for users
  getUser() {
    return this.afs.firestore.collection('users');
  }

  addUser(user) {
    return this.afs.firestore.collection(`users`).add(user);
  }

  updateUser(user) {
    return this.afs.firestore.collection(`users`).doc('/' + user.id).set(user);
  }

  removeUser(user) {
    return this.afs.firestore.collection(`users`).doc('/' + user.id).delete();
  }
}
