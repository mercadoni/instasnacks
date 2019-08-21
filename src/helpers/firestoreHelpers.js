import db from "../FirestoreConfig";

export async function getData (thisSetState, setInitialize) {
  await db.doc("components/cart").get()
    .then(doc => {
      if (doc && doc.exists) {
        const cart = doc.data();
        thisSetState("totalPrice", cart.total_price);
        thisSetState("cart", cart.cart);
      }
    })
    .catch(error => {
      console.log("Got and error: ", error);
    });
  setInitialize(true);
}

export async function setData(total_price,cart) {
  db.doc("components/cart").set({
    total_price,
    cart
  })
    .then(() => console.log("Status saved!"))
    .catch(error => console.log("Got an error: ", error));
}