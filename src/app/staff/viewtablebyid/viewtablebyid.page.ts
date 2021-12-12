import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-viewtablebyid',
  templateUrl: './viewtablebyid.page.html',
  styleUrls: ['./viewtablebyid.page.scss'],
})
export class ViewtablebyidPage implements OnInit {
  tables=[]
  form:FormGroup
  tableids=[]
  times=[]
  b=[]
  j={}
  td=""
  constructor(private authService:AuthService,public router: Router, public toastController: ToastController,public formbuilder: FormBuilder) {
    this.form=this.formbuilder.group({
      date:['',Validators.required,],
      time:['',Validators.required,],
    })
   }
   onSubmit(tableid){
    this.authService.tableid=tableid
    this.router.navigateByUrl("viewtablebyid")
    console.log(tableid)
    this.form.value.userid=this.authService.user.id
    this.form.value.tableid=tableid
    let dt=this.form.value.date
    const cValue = formatDate(dt, 'yyyy-MM-dd', 'en-US');
     this.form.value.date=cValue

  console.log(this.form.value)
  this.authService.booktable(this.form.value).subscribe(async (res:any)=>{
    console.log(res)
    
   const toast = await this.toastController.create({
     message:'Table Booked Successfully',
     duration: 2000
   });
   toast.present();
   this.ngOnInit()
  })
 }
  ngOnInit() {
    this.authService.viewtablesbyid({"tableid":this.authService.tableid}).subscribe((res:any)=>{
      console.log(res)
      this.tables=[res]
      
      let dt=new Date()
      console.log(dt)
      const cValue = formatDate(dt, 'yyyy-MM-dd', 'en-US');
      this.td=cValue
      console.log(cValue)
      for(let i=0;i<this.tables.length;i++){
        console.log("inn")
        if(this.tables[i].status==1){
          this.tableids.push(this.tables[i]._id)
          console.log("tableids",this.tableids)
          console.log("in if")
          this.authService.viewbooks({"tableid":this.authService.tableid}).subscribe((res:any)=>{
            console.log(res)
            this.b=res
            
          })
        }
        else{
          console.log("in else")

        }
      }
    })
  }

}
