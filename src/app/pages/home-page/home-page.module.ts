import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page.component";
import { HomePageRoutingModule } from "./home-page.routing.module";
import { HeaderModule } from "../../components/header/header.module";

@NgModule({
  declarations: [HomePageComponent],
  imports: [HomePageRoutingModule, CommonModule, HeaderModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
