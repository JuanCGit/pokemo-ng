import { Component, Input } from "@angular/core";
import { ExpansionModel } from "../../models/expansion.model";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrl: "./banner.component.scss",
})
export class BannerComponent {
  @Input() expansion!: ExpansionModel;
  @Input() isHomeBanner: boolean = false;
}