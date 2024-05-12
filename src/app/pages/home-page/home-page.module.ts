import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page.component";
import { HomePageRoutingModule } from "./home-page.routing.module";
import { HeaderModule } from "../../components/header/header.module";
import { BannerModule } from "../../components/banner/banner.module";
import { ButtonModule } from "../../components/button/button.module";
import { ExpansionModule } from "../../components/expansion/expansion.module";
import { ExpansionsCarrouselModule } from "./components/expansions-carrousel/expansions-carrousel.module";

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    HomePageRoutingModule,
    CommonModule,
    HeaderModule,
    BannerModule,
    ButtonModule,
    ExpansionModule,
    ExpansionsCarrouselModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
