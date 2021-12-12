import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-viewbookedtables',
  templateUrl: './viewbookedtables.page.html',
  styleUrls: ['./viewbookedtables.page.scss'],
})
export class ViewbookedtablesPage implements OnInit {
tables=[]
bookings=[]
  constructor(private authService:AuthService,public router: Router, public toastController: ToastController,public loadingController: LoadingController) { }

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
  async ngOnInit() {
    
    this.authService.viewbookedtablesbytableid({"tableid":this.authService.tableid}).subscribe(async (res:any)=>{
      console.log(res)
      this.bookings=res
     
      
    })
    this.authService.viewtablesbyid({"tableid":this.authService.tableid}).subscribe((res:any)=>{
      console.log(res)
      this.tables=[res]
      

    })
  }

}
