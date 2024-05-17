import { Component, Input } from "@angular/core";
import { SetInterface } from "../../interfaces/set.interface";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrl: "./banner.component.scss",
})
export class BannerComponent {
  @Input() expansion!: SetInterface;
  @Input() isHomeBanner: boolean = false;

  // Should disappear
  @Input() bgImage: string = "";
  @Input() logo: string = "";
}