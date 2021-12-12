import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mybookedtables',
  templateUrl: './mybookedtables.page.html',
  styleUrls: ['./mybookedtables.page.scss'],
})
export class MybookedtablesPage implements OnInit {
table=[]
  constructor(private authService:AuthService,public router: Router, public toastController: ToastController) { }

  cancelbooking(bookingid){
    console.log(bookingid)
    this.authService.cancelbooking({"bookingid":bookingid}).subscribe(async (res:any)=>{
      console.log(res)
      const toast = await this.toastController.create({
        message:'Table booking cancelled Successfully',
        duration: 2000
      });
      toast.present();
      this.ngOnInit()
    })
  }
  ngOnInit() {
    this.authService.viewbookedtablesbyuser({"userid":this.authService.user.id}).subscribe((res:any)=>{
      this.table=res
      console.log(res)
    })
  }

}
