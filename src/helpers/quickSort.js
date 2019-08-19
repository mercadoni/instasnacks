/*
const price_left = input[left] !== undefined ? input[left].special_price ? input[left].special_price : input[left].price : undefined;
  const price_max = input[max] !== undefined ? input[max].special_price ? input[max].special_price : input[max].price : undefined;
  const price_right = input[right] !== undefined ? input[right].special_price ? input[right].special_price : input[right].price : undefined;
*/

export function quickSort(origArray) {
  if (origArray.length <= 1) {
    return origArray;
  } else {

    var left = [];
    var right = [];
    var newArray = [];
    var pivot = origArray.pop();
    var length = origArray.length;


    var pivot_price = pivot !== undefined ? pivot.price : 0;
    for (var i = 0; i < length; i++) {
      var orig_price = origArray[i] !== undefined ? origArray[i].price : 0;

      if (orig_price <= pivot_price) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }

    return newArray.concat(quickSort(left), pivot, quickSort(right));
  }
}

export function bubbleSort(a, b){
  const price_a = a.subprice ? a.subprice : a.price;
  const price_b = b.subprice ? b.subprice : b.price;

  if (price_a > price_b) return 1;
  else return -1;
}