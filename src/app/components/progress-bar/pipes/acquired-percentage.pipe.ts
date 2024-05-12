import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone: true,
  name: "acquiredPercentagePipe",
})
export class AcquiredPercentagePipe implements PipeTransform {
  transform(total: number, acquired: number): number {
    return total === 0 ? 0 : (acquired / total) * 100;
  }
}
