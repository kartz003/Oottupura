import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.page.html',
  styleUrls: ['./vieworders.page.scss'],
})
export class ViewordersPage implements OnInit {
order=[]
  constructor(private authService:AuthService,public router: Router, public toastController: ToastController,public alertController: AlertController) { }
  vieworder(orderid){
    console.log(orderid)
    this.authService.orderid=orderid
    this.router.navigateByUrl("viewaorder")

  }
  ngOnInit() {
    this.authService.viewallorders({}).subscribe((res:any)=>{
      console.log(res)
      console.log('in')
      this.order=res
    })
  }

}
