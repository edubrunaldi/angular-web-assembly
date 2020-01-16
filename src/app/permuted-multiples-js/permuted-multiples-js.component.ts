import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permuted-multiples-js',
  templateUrl: './permuted-multiples-js.component.html',
  styleUrls: ['./permuted-multiples-js.component.scss']
})
export class PermutedMultiplesJsComponent implements OnInit {

  private result: number|string = '-';
  constructor() { }

  ngOnInit() {
  }

  sortString(str) {
    const arr = str.split('');
    let tmp;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        /* if ASCII code greater then swap the elements position*/
        if (arr[i] > arr[j]) {
          tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }
    return arr.join('');
  }

  reset() {
    this.result = '-';
  }

  async execute(n: number) {
    this.reset();
    if (n <= 0) {
      this.result = 'n must be > 0';
      return;
    }
    let finished = false;
    let i = 1;
    while (n > 0) {
      while (!finished) {
        let mult6 = '' + (i * 6);
        let mult2 = '' + (i * 2);
        if (mult6.length > mult2.length) {
          i++;
          continue;
        }

        let mult3 = '' + (i * 3);
        let mult4 = '' + (i * 4);
        let mult5 = '' + (i * 5);

        mult6 = this.sortString(mult6);
        mult5 = this.sortString(mult5);
        mult4 = this.sortString(mult4);
        mult3 = this.sortString(mult3);
        mult2 = this.sortString(mult2);
        if (mult6 === mult5 && mult6 === mult4 && mult6 === mult3 && mult6 === mult2) {
          finished = true;
          continue;
        }
        i++;
      }
      n--;
      if (n > 0) {
        i++;
        finished = false;
      }
    }

    console.log(i);
    this.result = i;

  }
}
