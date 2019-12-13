import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// 3th party
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
//
import { AppRoutingModule } from "./app-routing.module";
// Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/components/header/header.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
