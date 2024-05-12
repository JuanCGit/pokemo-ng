import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page.component";
import { HomePageRoutingModule } from "./home-page.routing.module";
import { HeaderModule } from "../../components/header/header.module";
import { BannerModule } from "../../components/banner/banner.module";
import { ButtonModule } from "../../components/button/button.module";
import { ExpansionModule } from "../../components/expansion/expansion.module";

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    HomePageRoutingModule,
    CommonModule,
    HeaderModule,
    BannerModule,
    ButtonModule,
    ExpansionModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
