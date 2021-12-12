import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
var image:any
@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.page.html',
  styleUrls: ['./addfood.page.scss'],
})
export class AddfoodPage implements OnInit {
  todo : FormGroup;
  img="../../assets/img/Food.png"
  foodcat=[]
  options = [
    {name:'Breakfast', value:'1', checked:true},
    {name:'Lunch', value:'2', checked:false},
    {name:'Snacks', value:'3', checked:true}
  ]

  constructor(private authService:AuthService,public router: Router, public formbuilder: FormBuilder,public toastController: ToastController,public alertController: AlertController) { 
    this.todo = this.formbuilder.group({
      fooditem: ['', Validators.required],
      foodprice: ['', Validators.required],
      foodimage: ['',],
      foodcategory:['',Validators.required],
      stock: ['', Validators.required],

      
    });
  }

  async encodeImageFileAsURL() {
    
    console.log("err")
    console.log("err")
    var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
    var filesSelected = document.getElementById("inputFileToLoad")["files"];
    var fileInput = document.getElementById('inputFileToLoad');
    var filePath = fileInput["value"];
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        // alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        fileInput["value"] = '';
       // return false;
        const toast = await this.toastController.create({
          message: 'Please upload file having extensions .jpeg/.jpg/.png/.gif only.',
          duration: 2000
        });
        toast.present();
    
      }
      else{
        console.log(filesSelected.length)
        if (filesSelected.length > 0) {
          var fileToLoad = filesSelected[0];
    
          var fileReader = new FileReader();
    
          fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target["result"]; // <--- data: base64
            image=srcData;
            
            console.log(image)
          }
          this.img=image
          fileReader.readAsDataURL(fileToLoad);
        }
      }
  }
  async handleUpload(event) {
    var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
    var filesSelected = document.getElementById("inputFileToLoad")["files"];
    var fileInput = document.getElementById('inputFileToLoad');
    var filePath = fileInput["value"];
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
      // alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
      fileInput["value"] = '';
     // return false;
      const toast = await this.toastController.create({
        message: 'Please upload file having extensions .jpeg/.jpg/.png/.gif only.',
        duration: 2000
      });
      toast.present();
  
    }
    else{
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
        var t=reader.result as string
        this.img=t
    };
  }
}
getValue(event){
  console.log("inn")
  console.log(event.checked)
}
 
  logForm(){
    
    this.todo.value.foodimage=this.img
    console.log(this.todo.value)
    for(let i=0;i<this.options.length;i++){
      if(this.options[i].checked==true){
        console.log(this.options[i].name)
        this.foodcat.push(this.options[i].name)
      }
    }
    this.todo.value.foodcategory=this.foodcat
    this.authService.addfood(this.todo.value).subscribe(async (res:any)=>{
      console.log(res)
      const toast = await this.toastController.create({
        message: this.todo.value.fooditem+' Added Successfully',
        duration: 2000
      });
      toast.present();
      this.ngOnInit();

    })

  }

 

  ngOnInit() {
    this.foodcat=[]
    this.todo.reset()

  }

}
