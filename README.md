<h3>Node.js & MySQL</h3>
<h2>Challenge #1</h2>

Create a MySQL Database called bamazon.
<ul>
Then create a Table inside of that database called products.
<li>
The products table should have each of the following columns:
<li></li>
-item_id (unique id for each product)
<li>
-product_name (Name of product)
<li>
-department_name
<li>
-price (cost to customer)
<li>
-stock_quantity (how much of the product is available in stores)
-Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
</ul>
Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

The app should then prompt users with two messages.

The first should ask them the ID of the product they would like to buy.
The second message should ask how many units of the product they would like to buy.

Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

However, if your store does have enough of the product, you should fulfill the customer's order.

This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.