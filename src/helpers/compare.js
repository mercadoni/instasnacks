export function compare(prod_a, prod_b){
  const price_a = prod_a.subprice ? prod_a.subprice : prod_a.price;
  const price_b = prod_b.subprice ? prod_b.subprice : prod_b.price;

  if (price_a > price_b) return 1;
  else return -1;
}

export function compareReverse(prod_a, prod_b){
  const price_a = prod_a.subprice ? prod_a.subprice : prod_a.price;
  const price_b = prod_b.subprice ? prod_b.subprice : prod_b.price;

  if (price_a > price_b) return -1;
  else return 1;
}

