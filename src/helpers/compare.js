export function compare(a, b){
  const price_a = a.subprice ? a.subprice : a.price;
  const price_b = b.subprice ? b.subprice : b.price;

  if (price_a > price_b) return 1;
  else return -1;
}

export function compareReverse(a, b){
  const price_a = a.subprice ? a.subprice : a.price;
  const price_b = b.subprice ? b.subprice : b.price;

  if (price_a > price_b) return -1;
  else return 1;
}