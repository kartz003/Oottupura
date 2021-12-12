import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
alert=[]
  constructor(private authService:AuthService,public router: Router,) { }
update(foodid){
this.authService.foodid=foodid
this.router.navigateByUrl("updatefood")
}
  ngOnInit() {
    this.authService.viewalert({}).subscribe((res:any)=>{
      console.log(res)
      this.alert=res

    })
  }

}
