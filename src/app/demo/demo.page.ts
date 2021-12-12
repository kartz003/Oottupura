import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { LoadingController } from '@ionic/angular';

declare var RazorpayCheckout:any;
@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {
food=[]
  constructor(private authService: AuthService, private storage: Storage,public loadingController: LoadingController,public router:Router) { }
  payWithRazorpay() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: "INR", // your 3 letter currency code
      key: "rzp_test_O33AeogdLECrKL", // your Key Id from Razorpay dashboard
      amount: 100, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Razorpay',
      prefill: {
        email: 'jishnugopalan2000@gmail.com',
        contact: '7994245510',
        name: 'Jishnu Gopalan'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function (payment_id) {
      alert('payment_id: ' + payment_id);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }


  logout() {
    this.authService.logout();
  }
  viewafood(foodid){
    console.log(foodid)
    this.authService.foodid=foodid
    this.router.navigateByUrl("viewafood")
    

  }
  viewfood(cat){
 console.log(cat)
 this.authService.foodcategory=cat;
 this.router.navigateByUrl("foodbycat")
  }
  async ngOnInit() {
    console.log("phone number"+this.authService.user.phone)

    // const loading = await this.loadingController.create({
    //   message: 'Please wait...',
    //   translucent: true,
    // });
    // await loading.present();
    
    // this.authService.viewfood({}).subscribe((res:any)=>{
    //   var r=res
    //   this.food=r
    //   console.log(res)
    //   loading.dismiss()
    // })

  }

}
