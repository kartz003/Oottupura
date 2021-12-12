import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.page.html',
  styleUrls: ['./foodlist.page.scss'],
})
export class FoodlistPage implements OnInit {
food=[]
stock="";
  constructor(private authService:AuthService,public router: Router) { }
  updatestock(foodid){
  console.log(foodid)
  this.authService.foodid=foodid
  this.router.navigateByUrl("updatefood")
  //console.log(this.stock)
  }
  ngOnInit() {
    this.authService.viewfood({}).subscribe((res:any)=>{
      console.log(res)
      this.food=res
    })
  }

}
