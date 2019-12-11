CREATE TABLE products
(
    id INTEGER
    AUTO_INCREMENT NOT NULL,
product_name VARCHAR
    (30) NOT NULL,
department_name VARCHAR
    (30) NOT NULL,
price VARCHAR
    (30) NOT NULL,
stock_quantity VARCHAR
    (30) NOT NULL,
PRIMARY KEY
    (id)
);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ('YETI backpack' , 'YETI' , '149.00' , '10');

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ('Magic Keyboard' , 'Apple' , '99.00' , '25'),
        ('Adidas Ultraboost' , 'Adidas' , '180.00' , '20'),
        ('Fitbit Versa 2' , 'Fitbit' , '129.00' , '30'),
        ('NBA 2K20' , 'Games' , '59.99' , '35'),
        ('Blender Bottle' , 'Blender Bottle' , '9.00' , '100'),
        ('Beard Trimmer' , 'Pasonic' , '149.00' , '50'),
        ('Itavic 2.0 Jacket' , 'Adidas' , '150.00' , '20'),
        ('BenQ  Desk Lamp' , 'BenQ' , '229.00' , '50'),
        ('Cool Humidifier' , 'Mioco' , '69.00' , '55');

    SELECT *
    FROM products;