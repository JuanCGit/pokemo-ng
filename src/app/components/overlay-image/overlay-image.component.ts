import { Component, ElementRef, Renderer2 } from "@angular/core";

@Component({
  selector: "app-overlay-image",
  templateUrl: "./overlay-image.component.html",
  styleUrl: "./overlay-image.component.scss",
})
export class OverlayImageComponent {
  private bounds!: DOMRect;
  imageUrl: string | null = null;
  backgroundImageUrl: string | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  onMouseEnter(): void {
    this.bounds = this.el.nativeElement
      .querySelector(".card")
      .getBoundingClientRect();
    this.renderer.listen(
      "document",
      "mousemove",
      this.rotateToMouse.bind(this),
    );
  }

  onMouseLeave(): void {
    this.renderer.removeClass(
      this.el.nativeElement.querySelector(".card"),
      "transformed",
    );
    this.el.nativeElement.querySelector(".card").style.transform = "";
    this.el.nativeElement.querySelector(".glow").style.backgroundImage = "";
    this.renderer.listen("document", "mousemove", () => {});
  }

  rotateToMouse(event: MouseEvent): void {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const leftX = mouseX - this.bounds.x;
    const topY = mouseY - this.bounds.y;
    const center = {
      x: leftX - this.bounds.width / 2,
      y: topY - this.bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    this.el.nativeElement.querySelector(".card").style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    this.el.nativeElement.querySelector(".glow").style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + this.bounds.width / 2}px
        ${center.y * 2 + this.bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
  }

  show(imageUrl: string, backgroundImageUrl: string) {
    this.imageUrl = imageUrl;
    this.backgroundImageUrl = backgroundImageUrl;
  }

  close() {
    this.imageUrl = null;
    this.backgroundImageUrl = null;
  }
}
