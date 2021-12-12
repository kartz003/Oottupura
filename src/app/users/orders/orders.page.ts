import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
food=[]
count=[]
total=[]
time=[]
order=[]
  constructor(private authService: AuthService,public loadingController: LoadingController,public router:Router,public toastController: ToastController) { }


 ionViewDidEnter(){
  console.log('foods',this.food)
  
 }
  ngOnInit() {
    this.authService.vieworderbyuserid({"orderid":this.authService.orderid,"userid":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      this.order=res
      
      for(let i=0;i<res.length;i++){
        this.total.push(res[i].totalprice)
      this.time.push(res[i].orderdate)

        let foodids=res[i].foodids
        this.count=res[i].counts
        console.log(foodids)
        for(let j=0;j<foodids.length;j++){
          this.authService.viewafood({"foodid":foodids[j]}).subscribe((res1:any)=>{
            console.log(res1)
            this.food.push(res1)

          })
        }

      }


    })
  }

}
