import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
// Components
import { BannerComponent } from "./components/banner/banner.component";
import { MainComponent } from "./container/main/main.component";
// 3rd party
import { CarouselModule } from "ngx-bootstrap/carousel";

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  }
];

@NgModule({
  declarations: [BannerComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule.forRoot()
  ]
})
export class HomeModule {}
