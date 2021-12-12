import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-updatefood',
  templateUrl: './updatefood.page.html',
  styleUrls: ['./updatefood.page.scss'],
})
export class UpdatefoodPage implements OnInit {
food=[]
stock
price
  constructor(private authService:AuthService,public router: Router, public toastController: ToastController) { }
  updatestock(foodid){
    console.log(foodid)
    console.log(this.stock)
    this.authService.updatestock({"foodid":foodid,"newstock":this.stock}).subscribe(async (res:any)=>{
      console.log(res)
      const toast = await this.toastController.create({
        message:'Stock Updated Successfully',
        duration: 2000
      });
      toast.present();
    this.ngOnInit()

    })
  }
  updateprice(foodid){
    console.log(foodid)
    console.log(this.price)
    this.authService.updatefoodprice({"foodid":foodid,"newprice":this.price}).subscribe(async (res:any)=>{
      console.log(res)
      const toast = await this.toastController.create({
        message:'Price Updated Successfully',
        duration: 2000
      });
      toast.present();
    this.ngOnInit()


    })

  }
  disablefood(foodid){
    console.log(foodid)
    this.authService.disablefood({"foodid":foodid}).subscribe(async (res:any)=>{
      console.log(res)
      const toast = await this.toastController.create({
        message:'Food item disabled',
        duration: 2000
      });
      toast.present();
    this.ngOnInit()


    })
  }
  activatefood(foodid){
     console.log(foodid)
     this.authService.activatefood({"foodid":foodid}).subscribe(async (res:any)=>{
      console.log(res)
      const toast = await this.toastController.create({
        message:'Food ready to selling',
        duration: 2000
      });
      toast.present();
    this.ngOnInit()


    })

  }
  
  ngOnInit() {
    this.authService.viewafood({"foodid":this.authService.foodid}).subscribe((res:any)=>{
      console.log(res)
      this.food=res
      this.stock=res[0].stock
      this.price=res[0].foodprice
    })
  }

}
