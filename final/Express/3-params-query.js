const express = require("express");
const app = express();

const { products, people } = require("./data.js");

app.get("/", (req, res) => {
  //   res.json([{ name: "john" }, { name: "susan" }]);
  // res.json(people);

  res.write(
    '<h1>Home Page</h1> <a href="/api/products">products</a> - <a href="/api/products/2">product2</a>'
  );
});

// Map all products
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

//Route Params
app.get("/api/products/:productID", (req, res) => {
  //console.log(req.params);

  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
    //every param is returned as a string
  );

  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }

  res.json(singleProduct);
});

// Query String
app.get("/api/v1/query", (req, res) => {
  console.log(req.query);

  const { search, limit } = req.query;
  let sortedProducts = [...products]; //spread

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send("no prodcuts match your search");
    return res.status(200).json({ sucess: true, data: [] });
  }

  res.status(200).json(sortedProducts);

  //localhost:5000/api/v1/query?name=john&id=4
  //localhost:5000/api/v1/query?search=a&limit=2
});

////////////////////////
app.listen(5000, () => {
  console.log("Server listening to port 5000");
});
