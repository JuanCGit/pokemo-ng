import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProgressBarComponent } from "./progress-bar.component";
import { AcquiredPercentagePipe } from "./pipes/acquired-percentage.pipe";

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [CommonModule, AcquiredPercentagePipe],
  exports: [ProgressBarComponent],
})
export class ProgressBarModule {}
