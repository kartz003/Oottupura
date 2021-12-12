import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-addcoupon',
  templateUrl: './addcoupon.page.html',
  styleUrls: ['./addcoupon.page.scss'],
})
export class AddcouponPage implements OnInit {
form:FormGroup
coupon=[]
  constructor(private authService:AuthService,public router: Router, public formbuilder: FormBuilder,public toastController: ToastController,public alertController: AlertController) {
    this.form=this.formbuilder.group({
      couponcode:['',[Validators.required]],
      discount_percentage:['',[Validators.required,Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),]],
      price_range:['',[Validators.required, Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')],],
      valid_date_from:['',[Validators.required]],
      valid_date_to:['',[Validators.required]]

    })
   }
   delete(couponid){
   this.authService.deletecoupon({"couponid":couponid}).subscribe(async (res:any)=>{
     console.log(res)
     const toast = await this.toastController.create({
      message: 'Coupon deleted scuccessfully',
      duration: 2000
    });
    toast.present();
    this.ngOnInit()
   })
   }
   onSubmit(){
     console.log(this.form.value)
     this.authService.addcoupon(this.form.value).subscribe(async (res:any)=>{
       console.log(res)
       const toast = await this.toastController.create({
        message: 'Coupon Added Successfully',
        duration: 2000
      });
      toast.present();
      this.ngOnInit()
     })
   }
  ngOnInit() {
    this.authService.viewcoupon({}).subscribe((res:any)=>{
      console.log(res)
      this.coupon=res
    })
  }

}
