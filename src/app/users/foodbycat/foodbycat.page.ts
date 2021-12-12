import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-foodbycat',
  templateUrl: './foodbycat.page.html',
  styleUrls: ['./foodbycat.page.scss'],
})
export class FoodbycatPage implements OnInit {
food=[]
  constructor(private authService: AuthService,public loadingController: LoadingController,public router:Router,public toastController: ToastController) { }
  viewafood(foodid){
    console.log(foodid)
    this.authService.foodid=foodid
    this.router.navigateByUrl("viewafood")
    

  }
  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
    });
    await loading.present();
    
    this.authService.viewfoodbycategory({"foodcategory":this.authService.foodcategory}).subscribe((res:any)=>{
      var r=res
      this.food=r
      console.log(res)
      loading.dismiss()
    })

  

  }

}
