import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-addtable',
  templateUrl: './addtable.page.html',
  styleUrls: ['./addtable.page.scss'],
})
export class AddtablePage implements OnInit {
form:FormGroup
table_image="../../assets/img/table.png"
  constructor(private authService:AuthService,public router: Router, public formbuilder: FormBuilder,public toastController: ToastController) { 
    this.form=this.formbuilder.group({
      table_number:['',Validators.required,],
      seating_capacity:['',Validators.required,],
      table_position:['',Validators.required]
    
    })
  }

onSubmit(){
  this.form.value.table_image=this.table_image
  console.log(this.form.value)
  this.authService.addtable(this.form.value).subscribe(async (res:any)=>{
    console.log(res)
    const toast = await this.toastController.create({
      message:'Table Added Successfully',
      duration: 2000
    });
    toast.present();
    this.ngOnInit();
  })

}
  ngOnInit() {
  }

}
