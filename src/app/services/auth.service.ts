
import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
 
const TOKEN_KEY = 'access_token';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);
  a:any
  phone:any
  uid:any
  userform:any
  profile_pic:any
  name:any
  foodid:any
  orderid:any
  foodcategory:any
  userid:any
  tableid:any
  constructor(private http: HttpClient, private helper: JwtHelperService, private storage: Storage,
    private plt: Platform, private alertController: AlertController) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);
 
        if (!isExpired) {
          this.user = decoded;
          console.log(this.user)
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }

  rejectstaff(credentials: any) {
    return this.http.post(`${this.url}/api/rejectstaff`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updateorderstatus(credentials: any) {
    return this.http.post(`${this.url}/api/updateorderstatus`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  checkcoupon(credentials: any) {
    return this.http.post(`${this.url}/api/checkcoupon`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  deletecoupon(credentials: any) {
    return this.http.post(`${this.url}/api/deletecoupon`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewcoupon(credentials: any) {
    return this.http.post(`${this.url}/api/viewcoupon`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addcoupon(credentials: any) {
    return this.http.post(`${this.url}/api/addcoupon`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewfeedback(credentials: any) {
    return this.http.post(`${this.url}/api/viewfeedback`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addfeedback(credentials: any) {
    return this.http.post(`${this.url}/api/addfeedback`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updateimage(credentials: any) {
    return this.http.post(`${this.url}/api/updateimage`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatephone(credentials: any) {
    return this.http.post(`${this.url}/api/updatephone`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatename(credentials: any) {
    return this.http.post(`${this.url}/api/updatename`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  checkpassword(credentials: any) {
    return this.http.post(`${this.url}/api/checkpassword`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatepassword(credentials: any) {
    return this.http.post(`${this.url}/api/updatepassword`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
    updatepass(credentials: any) {
    return this.http.post(`${this.url}/api/updatepass`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  findphone(credentials: any) {
    return this.http.post(`${this.url}/api/findphone`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  findemail(credentials: any) {
    return this.http.post(`${this.url}/api/findemail`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewprofile(credentials: any) {
    return this.http.post(`${this.url}/api/viewprofile`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewalert(credentials) {
    return this.http.post(`${this.url}/api/viewalert`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  activatefood(credentials) {
    return this.http.post(`${this.url}/api/activatefood`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  disablefood(credentials) {
    return this.http.post(`${this.url}/api/disablefood`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatefoodprice(credentials) {
    return this.http.post(`${this.url}/api/updatefoodprice`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewbookedtablesbytableid(credentials) {
    return this.http.post(`${this.url}/api/viewbookedtablesbytableid`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  cancelbooking(credentials) {
    return this.http.post(`${this.url}/api/cancelbooking`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  viewtablesbyid(credentials) {
    return this.http.post(`${this.url}/api/viewtablesbyid`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewbooks(credentials) {
    return this.http.post(`${this.url}/api/viewbooks`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewbookedtablesbyuser(credentials) {
    return this.http.post(`${this.url}/api/viewbookedtablesbyuser`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewbookedtables(credentials) {
    return this.http.post(`${this.url}/api/viewbookedtables`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  booktable(credentials) {
    return this.http.post(`${this.url}/api/booktable`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  viewtables(credentials) {
    return this.http.post(`${this.url}/api/viewtables`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addtable(credentials) {
    return this.http.post(`${this.url}/api/addtable`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatestatus(credentials) {
    return this.http.post(`${this.url}/api/updatestatus`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewstaff(credentials) {
    return this.http.post(`${this.url}/api/viewstaff`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewmyorders(credentials) {
    return this.http.post(`${this.url}/api/viewmyorders`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatestock(credentials) {
    return this.http.post(`${this.url}/api/updatestock`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewallorders(credentials) {
    return this.http.post(`${this.url}/api/viewallorders`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewfoodbycategory(credentials) {
    return this.http.post(`${this.url}/api/viewafoodbycategory`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  vieworder(credentials) {
    return this.http.post(`${this.url}/api/vieworder`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  vieworderbyuserid(credentials) {
    return this.http.post(`${this.url}/api/vieworderbyid`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  deletefood(credentials) {
    return this.http.post(`${this.url}/api/deletefood`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  deletecart(credentials) {
    return this.http.post(`${this.url}/api/deletecart`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  
  createorder(credentials) {
    return this.http.post(`${this.url}/api/createorder`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  getproductfromcart(credentials) {
    return this.http.post(`${this.url}/api/getproductfromcart`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addtocart(credentials) {
    return this.http.post(`${this.url}/api/addtocart`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewafood(credentials) {
    return this.http.post(`${this.url}/api/viewafood`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewfood(credentials) {
    return this.http.post(`${this.url}/api/viewfood`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addfood(credentials) {
    return this.http.post(`${this.url}/api/addfood`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  checkotp(credentials) {
    return this.http.post(`${this.url}/api/checkotp`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  createotp(credentials) {
    return this.http.post(`${this.url}/api/createotp`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
 
  register(credentials) {
    return this.http.post(`${this.url}/api/register`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
 
  login(credentials) {
    return this.http.post(`${this.url}/api/login`, credentials)
      .pipe(
        tap(res => {
          console.log(res);
         
          this.storage.set(TOKEN_KEY, res['token']);
          this.a=res['token'];
          this.user = this.helper.decodeToken(res['token']);
          console.log(this.user);
          this.authenticationState.next(true);
        }),
        catchError(e => {
          this.showAlert(e.error.msg);
          throw new Error(e);
        })
      );
  }
 
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  getSpecialData() {
    return this.http.get(`${this.url}/api/special`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }
 
  isAuthenticated() {
    console.log(this.authenticationState.value);
    return this.authenticationState.value;
  }
 
  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}