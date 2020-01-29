import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";
import { HeaderComponent } from "./home/header/header.component";
import { BodyComponent } from "./home/body/body.component";
import { FooterComponent } from "./home/footer/footer.component";
import { DiscountComponent } from './home/body/discount/discount.component';
import { ProductsComponent } from './home/body/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DiscountComponent,
    ProductsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
