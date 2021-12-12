import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-viewaorder',
  templateUrl: './viewaorder.page.html',
  styleUrls: ['./viewaorder.page.scss'],
})
export class ViewaorderPage implements OnInit {
order=[]
total=[]
time=[]
count=[]
food=[]
  constructor(private authService:AuthService,public router: Router, public toastController: ToastController,public alertController: AlertController) { }

  completed(){
    console.log("inn")
this.authService.updateorderstatus({"orderid":this.authService.orderid}).subscribe(async (res:any)=>{
  console.log(res)
  const toast = await this.toastController.create({
    message: 'This order marked as completed',
    duration: 2000
  });
  toast.present();
  this.router.navigateByUrl("/vieworders")

})
  }
  ngOnInit() {
    this.authService.vieworder({"orderid":this.authService.orderid}).subscribe((res:any)=>{
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
