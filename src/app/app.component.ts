import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
   student=false
   admin=false
   staff=false
   name:any
   profile_pic:any
   email:any
  public StudentPages = [
    { title: 'Home', url: 'demo', icon: 'home' },
    { title: 'Cart', url: 'cart', icon: 'cart' },
    { title: 'Orders', url: 'orderlist', icon: 'fast-food' },
    { title: 'Add Feedback', url: 'feedback', icon: 'happy' },
    { title: 'Settings', url: 'settings', icon: 'settings' },
    { title: 'About', url: 'about', icon: 'information' },
    //{ title: 'Home', url: 'demo', icon: 'home' },
  
  ]
  public StaffPages = [
    { title: 'Home', url: 'demo', icon: 'home' },
    { title: 'Cart', url: 'cart', icon: 'cart' },
    { title: 'Orders', url: 'orderlist', icon: 'fast-food' },
    { title: 'Book Table', url: 'table', icon: 'reader' },
    { title: 'Booked Table', url: 'mybookedtables', icon: 'reader' },
    { title: 'Add Feedback', url: 'feedback', icon: 'happy' },
    { title: 'Settings', url: 'settings', icon: 'settings' },
    { title: 'About', url: 'about', icon: 'information' },
    //{ title: 'Home', url: 'demo', icon: 'home' },
  
  ]
  public AdminPages = [
    { title: 'Home', url: 'adminhome', icon: 'home' },
    { title: 'Add Food Items', url: 'addfood', icon: 'fast-food' },
    { title: 'Update Food Items', url: 'foodlist', icon: 'fast-food' },
    { title: 'View Orders', url: 'vieworders', icon: 'receipt' },
    { title: 'Approve Staffs', url: 'viewstaff', icon: 'person' },
    { title: 'Add Tables', url: 'addtable', icon: 'add' },
    { title: 'View Tables', url: 'viewtables', icon: 'reader' },
    { title: 'Create Coupons', url: 'addcoupon', icon: 'film' },

    { title: 'Alert', url: 'alert', icon: 'alert' },
    { title: 'View Feedbacks', url: 'admin-feedbacks', icon: 'eye' },
    { title: 'Settings', url: 'settings', icon: 'settings' },
    { title: 'About', url: 'about', icon: 'information' },
    //{ title: 'Home', url: 'demo', icon: 'home' },
  
  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.authenticationState.subscribe(async state => {

        
        if (state) {
          let userinfo=this.authService.user
          this.authService.profile_pic=userinfo.profile_pic
          this.authService.name=userinfo.name
          if(userinfo.usertype=="student"){
            console.log(userinfo.usertype)
            this.student=true
            this.admin=false
            this.staff=false
            this.name=this.authService.name
            this.profile_pic=this.authService.profile_pic
            this.email=this.authService.user.email
            this.router.navigate(['demo']);


          }
          else if(userinfo.usertype=="staff"){
            if(userinfo.status==1){
              console.log(userinfo.usertype)
            this.student=false
            this.admin=false
            this.staff=true
            this.name=this.authService.name
            this.profile_pic=this.authService.profile_pic
            this.email=this.authService.user.email
            this.router.navigate(['demo']);

            }
            else{
              let toast = this.toastCtrl.create({
                message: 'You are not verified by admin',
                duration: 3000,
                position: 'middle'
              });
            
              (await toast).present();

            }
            console.log(userinfo.usertype)

          }
          else if(userinfo.usertype=="admin"){
            console.log(userinfo.usertype)
            console.log(userinfo.usertype)
            this.student=false
            this.admin=true
            this.staff=false
            this.name=this.authService.name
            this.profile_pic=this.authService.profile_pic
            this.email=this.authService.user.email
            this.router.navigate(['adminhome']);

          }
          
        } else {
          this.router.navigate(['home']);
        }
    });
  });
}
}
