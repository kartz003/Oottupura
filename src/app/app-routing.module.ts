import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'inside',
    loadChildren: () => import('./pages/inside/inside.module').then( m => m.InsidePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then( m => m.DemoPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'adminhome',
    loadChildren: () => import('./admin/adminhome/adminhome.module').then( m => m.AdminhomePageModule)
  },
  {
    path: 'addfood',
    loadChildren: () => import('./admin/addfood/addfood.module').then( m => m.AddfoodPageModule)
  },
  {
    path: 'viewafood',
    loadChildren: () => import('./users/viewafood/viewafood.module').then( m => m.ViewafoodPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./users/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./users/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'orderlist',
    loadChildren: () => import('./users/orderlist/orderlist.module').then( m => m.OrderlistPageModule)
  },
  {
    path: 'foodbycat',
    loadChildren: () => import('./users/foodbycat/foodbycat.module').then( m => m.FoodbycatPageModule)
  },
  {
    path: 'vieworders',
    loadChildren: () => import('./admin/vieworders/vieworders.module').then( m => m.ViewordersPageModule)
  },
  {
    path: 'viewaorder',
    loadChildren: () => import('./admin/viewaorder/viewaorder.module').then( m => m.ViewaorderPageModule)
  },
  {
    path: 'foodlist',
    loadChildren: () => import('./admin/foodlist/foodlist.module').then( m => m.FoodlistPageModule)
  },
  {
    path: 'updatefood',
    loadChildren: () => import('./admin/updatefood/updatefood.module').then( m => m.UpdatefoodPageModule)
  },
  {
    path: 'viewstaff',
    loadChildren: () => import('./admin/viewstaff/viewstaff.module').then( m => m.ViewstaffPageModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./staff/table/table.module').then( m => m.TablePageModule)
  },
  {
    path: 'addtable',
    loadChildren: () => import('./admin/addtable/addtable.module').then( m => m.AddtablePageModule)
  },
  {
    path: 'viewtables',
    loadChildren: () => import('./admin/viewtables/viewtables.module').then( m => m.ViewtablesPageModule)
  },
  {
    path: 'viewtablebyid',
    loadChildren: () => import('./staff/viewtablebyid/viewtablebyid.module').then( m => m.ViewtablebyidPageModule)
  },
  {
    path: 'mybookedtables',
    loadChildren: () => import('./staff/mybookedtables/mybookedtables.module').then( m => m.MybookedtablesPageModule)
  },
  {
    path: 'viewbookedtables',
    loadChildren: () => import('./admin/viewbookedtables/viewbookedtables.module').then( m => m.ViewbookedtablesPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./admin/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'admin-feedbacks',
    loadChildren: () => import('./admin-feedbacks/admin-feedbacks.module').then( m => m.AdminFeedbacksPageModule)
  },
  {
    path: 'addcoupon',
    loadChildren: () => import('./admin/addcoupon/addcoupon.module').then( m => m.AddcouponPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
