import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
declare var RazorpayCheckout:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
cart=[]
food=[]
count=[]
cartid=[]
price=0
p=false
paymentid
couponcode=""
discount=0
validdate=""
coupon=true
  constructor(private datePipe: DatePipe,private authService: AuthService,public loadingController: LoadingController,public router:Router,public toastController: ToastController) { }
  payWithRazorpay() {
    var options = {
      description: 'You are paying to Ootupura , M A College canteen',
      image: '',
      currency: "INR", // your 3 letter currency code
      key: "rzp_test_IMSVOdjW1UfDWS", // your Key Id from Razorpay dashboard
      amount: this.price*100, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Razorpay',
      //order_id:"order_DBJOWzybf0sJbb",
      prefill: {
        email: this.authService.user.email,
        contact: this.authService.user.phone,
        name: this.authService.user.name
      },
      theme: {
        color: '#528FF0'
      },
      modal: {
        ondismiss: async function () {
          alert('dismissed')
          const toast = await this.toastController.create({
            message:'Payment cancelled',
            duration: 2000
          });
          toast.present();
        }
      },
      "handler": function (response){

        console.log(response.razorpay_payment_id);
        if (typeof response.razorpay_payment_id == 'undefined' ||  response.razorpay_payment_id < 1) {
         console.log("a")
         
         
        } else {
          console.log("b")
         
          
        }


      },
     
    };

    var successCallback = function (payment_id) {
      alert('payment_id: ' + payment_id);
      console.log("payment successful")
      
      
      
      //this.paymentid=payment_id
      // this.authService.createorder({"userid":this.authService.user.id,"foodids":this.food,"paymentid":this.paymentid,"totalprice":this.price}).subscribe((res:any)=>{
      //   console.log(res);
      // })
      
      
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };
    

    

    RazorpayCheckout.open(options, successCallback, cancelCallback);
    // this.authService.createorder({"userid":this.authService.user.id,"foodids":this.food,"paymentid":this.paymentid,"totalprice":this.price}).subscribe((res:any)=>{
    //   console.log(res);
    // })
    
    RazorpayCheckout.on('payment.success', async (payment_id) => {
      const loading = await this.loadingController.create({
        message: 'Please wait,do not press back...',
        translucent: true,
      });
      await loading.present();
      this.authService.createorder({"userid":this.authService.user.id,"foodids":this.food,"counts":this.count,"paymentid":payment_id.razorpay_payment_id,"totalprice":this.price}).subscribe((res:any)=>{
      console.log(res);
      for(let i=0;i<this.cartid.length;i++){
        this.authService.deletecart({"cartid":this.cartid[i]}).subscribe((res:any)=>{
          console.log('Deleted',res)
          loading.dismiss()

         this.router.navigateByUrl("orders")

        })
      }

    })
      
      });
      


  }
  
  applyCoupon(){
    console.log(this.couponcode)
    
    this.authService.checkcoupon({"couponcode":this.couponcode}).subscribe(async (res:any)=>{
      console.log(res)
      let today=new Date()
      let dt= this.datePipe.transform(today, 'yyyy-MM-dd');
      console.log(dt)
      let fromdate=res.valid_date_from
      let todate=res.valid_date_to
      let price_range=res.price_range
      let validdatefrom=this.datePipe.transform(fromdate, 'yyyy-MM-dd');
      let validdateto=this.datePipe.transform(todate, 'yyyy-MM-dd');
      console.log(validdatefrom,validdateto)
      if(this.price>price_range){
        if(dt>validdateto || dt<validdatefrom){
          const toast = await this.toastController.create({
            message:'The coupon is expired',
            duration: 2000
          });
          toast.present();
        }
        else{
  
           this.discount=res.discount_percentage
        console.log(this.discount)
        let per=((this.discount/100.0)*this.price)
        let prevprice=this.price
        this.price=this.price-per
        if(this.price!=prevprice){
          const toast = await this.toastController.create({
            message:'Coupon applied successfully,You got '+this.discount+' percentage disscount',
            duration: 2000
          });
          this.coupon=false
          toast.present();
        }
  
        }

      }
      else{
        const toast = await this.toastController.create({
          message:'The coupon is not applicable',
          duration: 2000
        });
        toast.present();
      }
     
      


     
    })
  }

  deletefood(cartid,foodid,stock,count){
  console.log(cartid)
  console.log(foodid)
  console.log(stock)
  console.log(count)
  let newstock=stock+count
  console.log(newstock)
  this.authService.deletefood({"cartid":cartid,"foodid":foodid,"newstock":newstock}).subscribe((res:any)=>{
    console.log(res)
    this.ngOnInit()
  })
  }
  paynow(){
    for(let i=0;i<this.cart.length;i++){
      console.log(this.cart[i].foods[0].foodprice)
     // this.price=this.price+this.cart[i].foods[0].foodprice
     this.food.push(this.cart[i].foods[0]._id);
     this.count.push(this.cart[i].count)
     this.cartid.push(this.cart[i]._id)

     console.log(this.food)
     console.log(this.count)
     console.log(this.cartid)


    }
    this.payWithRazorpay()
    


  }
  


  async ngOnInit() {
    
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
    });
    await loading.present();
    this.authService.getproductfromcart({"userid":this.authService.user.id}).subscribe(async (res:any)=>{
      this.price=0
      console.log(res)
      if(res.length==0){
        const toast = await this.toastController.create({
          message:'Your cart is empty',
          duration: 2000
        });
        toast.present();
      }
      this.cart=res
      for(let i=0;i<res.length;i++){
        console.log(this.cart[i].foods[0].foodprice)
        this.price=this.price+this.cart[i].foods[0].foodprice*this.cart[i].count

      }
      loading.dismiss()
      if(this.price==0){
        this.p=false

  
      }
      if(this.price!=0){
        this.p=true
        
  
      }
      

    })

  }

}
