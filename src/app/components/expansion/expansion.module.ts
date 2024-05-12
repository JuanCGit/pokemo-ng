import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExpansionComponent } from "./expansion.component";
import { ProgressBarModule } from "../progress-bar/progress-bar.module";

@NgModule({
  declarations: [ExpansionComponent],
  imports: [CommonModule, ProgressBarModule],
  exports: [ExpansionComponent],
})
export class ExpansionModule {}
