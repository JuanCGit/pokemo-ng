import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExpansionComponent } from "./expansion.component";
import { ProgressBarModule } from "../progress-bar/progress-bar.module";
import { RouterLink } from "@angular/router";

@NgModule({
  declarations: [ExpansionComponent],
  imports: [CommonModule, ProgressBarModule, RouterLink],
  exports: [ExpansionComponent],
})
export class ExpansionModule {}