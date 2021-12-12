import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-viewstaff',
  templateUrl: './viewstaff.page.html',
  styleUrls: ['./viewstaff.page.scss'],
})
export class ViewstaffPage implements OnInit {
staff=[]
  constructor(private authService:AuthService,public router: Router, public toastController: ToastController,public loadingController: LoadingController) { }
  
  reject(userid){
this.authService.rejectstaff({"userid":userid}).subscribe(async (res:any)=>{
  console.log(res)
  let toast = this.toastController.create({
    message: 'Staff rejected successfully',
    duration: 3000,
   
  });
  (await toast).present();
  this.ngOnInit()
})
  }
  approve(userid){

    console.log(userid)
    this.authService.updatestatus({"userid":userid}).subscribe(async (res:any)=>{
      console.log(res)
      let toast = this.toastController.create({
        message: 'Staff approved successfully',
        duration: 3000,
       
      });
      (await toast).present();
      this.ngOnInit()
    })
  }
  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
    });
    await loading.present();
    this.authService.viewstaff({}).subscribe((res:any)=>{
      console.log(res)
      this.staff=res
      loading.dismiss()
    })
  }

}
