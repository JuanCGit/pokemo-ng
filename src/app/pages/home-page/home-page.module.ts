import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page.component";
import { HomePageRoutingModule } from "./home-page.routing.module";
import { BannerModule } from "../../components/banner/banner.module";
import { ExpansionModule } from "../../components/expansion/expansion.module";
import { ExpansionsCarrouselModule } from "./components/expansions-carrousel/expansions-carrousel.module";

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    HomePageRoutingModule,
    CommonModule,
    BannerModule,
    ExpansionModule,
    ExpansionsCarrouselModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
