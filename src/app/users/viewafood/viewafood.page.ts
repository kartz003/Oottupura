import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-viewafood',
  templateUrl: './viewafood.page.html',
  styleUrls: ['./viewafood.page.scss'],
})
export class ViewafoodPage implements OnInit {
  food=[]
  no=1
  constructor(private authService: AuthService,public loadingController: LoadingController,public router:Router,public toastController: ToastController) { }
  async addtocart(foodid,stock){
    console.log(foodid);
    console.log(this.no)
    if(this.no==0 || this.no==null){
      const toast = await this.toastController.create({
            message:'Please enther the number of items',
            duration: 2000
          });
          toast.present();
         // this.ngOnInit();

    }
    else{
      let newstock=stock-this.no
      console.log(newstock)
      if(newstock<0){
        const toast = await this.toastController.create({
          message:'Item stock not available',
          duration: 2000
        });
        toast.present();
        //this.ngOnInit();

      }
      else if(newstock>=0){

      
      this.authService.addtocart({"foodid":foodid,"userid":this.authService.user.id,"count":this.no,"newstock":newstock}).subscribe(async (res:any)=>{
        console.log(res)
        const toast = await this.toastController.create({
          message:'Item added to cart',
          duration: 2000
        });
        toast.present();
        this.ngOnInit();

  
      })
    }

    }
   
  }

  ngOnInit() {
    this.authService.viewafood({"foodid":this.authService.foodid}).subscribe((res:any)=>{
      console.log(res)
      this.food=res
    })
  }

}
