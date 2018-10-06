# Mercasnacks

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## How it works!!!
I chose angular in its latest version, since it is the framework in which I have more experience; I have created 5 components, a pipe to order the products from lowest to highest and vice versa and a service to obtain the information of the endpoint that you gave me.

In product list component the product component is rendered, which has all the information of each product that brings me the service, in this parent component I use the pipe to order the list of products.

Each product card has a button to add the product to the shopping list, the component is called drawer and in this component I make the sum of the total prices of each selected product, I also reuse the product component in drawer component showing only the image, name and price of the produc, additionally, i add a button to remove the product from the list and its value from the drawer total.
