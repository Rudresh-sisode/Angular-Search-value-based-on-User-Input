import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import { HeaderComponent } from './header.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myupper.pipe';
import { DiscountPipe } from './products/discount.pipe';
import { ProductSearchPipe } from './products/productFilter.pipe';

//decorator
@NgModule({

    //all the module will be declare here
    imports: [
        BrowserModule,
        FormsModule
    ],

    // all the component and pipe
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearchPipe
    ],

    //only first component
    bootstrap: [
        AppComponent
    ],

    //all services
    providers: []


})


export class AppModule{

}