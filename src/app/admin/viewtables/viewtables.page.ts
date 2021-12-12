import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-viewtables',
  templateUrl: './viewtables.page.html',
  styleUrls: ['./viewtables.page.scss'],
})
export class ViewtablesPage implements OnInit {
tables=[]
date
time
  constructor(private authService:AuthService,public router: Router, public toastController: ToastController) { }
  viewbookedtables(tableid){
console.log(tableid)
this.authService.tableid=tableid
this.router.navigateByUrl("viewbookedtables")
  }

  ngOnInit() {
    this.authService.viewtables({}).subscribe((res:any)=>{
      console.log(res)
      this.tables=res
    })
  }

}
