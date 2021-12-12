import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.page.html',
  styleUrls: ['./orderlist.page.scss'],
})
export class OrderlistPage implements OnInit {
order=[]
  constructor(private authService: AuthService,public loadingController: LoadingController,public router:Router,public toastController: ToastController) { }

  vieworder(orderid){
    console.log(orderid)
    this.authService.orderid=orderid
    this.router.navigateByUrl("orders")

  }
  ngOnInit() {
    console.log(this.authService.user.id)
    this.authService.viewmyorders({"userid":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      this.order=res
    })
  }

}
