import { Component, Input } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrl: "./banner.component.scss",
})
export class BannerComponent {
  @Input() bgImage: string = "";
  @Input() isHomeBanner: boolean = false;
  @Input() overImage: string = "";
}
