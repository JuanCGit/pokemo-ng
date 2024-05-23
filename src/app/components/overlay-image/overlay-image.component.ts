import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  OnDestroy,
} from "@angular/core";

@Component({
  selector: "app-overlay-image",
  templateUrl: "./overlay-image.component.html",
  styleUrl: "./overlay-image.component.scss",
})
export class OverlayImageComponent implements OnDestroy {
  @ViewChild("card") card!: ElementRef<HTMLDivElement>;
  @ViewChild("glow") glow!: ElementRef<HTMLDivElement>;

  private bounds!: DOMRect;
  private mouseMoveListener: (() => void) | null = null;

  imageUrl: string | null = null;
  backgroundImageUrl: string | null = null;

  constructor(private renderer: Renderer2) {}

  onMouseEnter(): void {
    this.bounds = this.card.nativeElement.getBoundingClientRect();
    this.mouseMoveListener = this.renderer.listen(
      "document",
      "mousemove",
      this.rotateToMouse.bind(this),
    );
  }

  onMouseLeave(): void {
    if (this.mouseMoveListener) {
      this.mouseMoveListener();
      this.mouseMoveListener = null;
    }
    this.card.nativeElement.style.transform = "";
    this.glow.nativeElement.style.backgroundImage = "";
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

    this.card.nativeElement.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    this.glow.nativeElement.style.backgroundImage = `
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

  ngOnDestroy(): void {
    if (this.mouseMoveListener) {
      this.mouseMoveListener();
    }
  }
}
