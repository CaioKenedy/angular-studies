import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'folderFor',
})
export class FolderForPipe implements PipeTransform {
  transform(value: number, multiplier: number): unknown {
    return value * multiplier;
  }
}
