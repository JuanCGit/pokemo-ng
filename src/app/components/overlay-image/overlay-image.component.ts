import { Component } from "@angular/core";

@Component({
  selector: "app-overlay-image",
  templateUrl: "./overlay-image.component.html",
  styleUrl: "./overlay-image.component.scss",
})
export class OverlayImageComponent {
  imageUrl: string | null = null;

  show(imageUrl: string) {
    this.imageUrl = imageUrl;
  }
}