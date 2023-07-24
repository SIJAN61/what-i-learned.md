//4.Find the list of unique products that is less than price 20

const users = [
    {
      name: "Jason",
      type: "member",
      price: 39,
      priceType: "monthly",
      category: ["clothing", "food", "medicine"],
      brand: "aroma",
      status: "published",
      color: ["red", "green", "blue"],
      products: [
        {name: "product one", type: "clothing", price: 19, category: "men" },
        {name: "product two", type: "clothing", price: 29, category: "women" },
        {name: "product three", type: "food", price: 9, category: "liquid" },
        {name: "product four", type: "medicine", price: 3.5, category: "heart" },
      ]
    },
    {
      name: "John Doe",
      type: "customer",
      price: 0,
      priceType: "",
      category: ["food", "medicine"],
      brand: "typhon",
      status: "new",
      color: ["yellow", "black", "orange", "green"],
      products: [
        {name: "product one", type: "clothing", price: 19, category: "men" },
        {name: "product two", type: "clothing", price: 29, category: "women" },
        {name: "product three", type: "food", price: 9, category: "liquid" },
      ]
    }
  ];

   const uniqeLawPrice = [] 

  const lawPrice = users.forEach((user)=>{
  user.products.forEach((product)=>{
   console.log(product)
   if(product.price<20&&!uniqeLawPrice.some(p=>p.name===product.name)){
    uniqeLawPrice.push(product)
   }
  })
  })
  console.log(uniqeLawPrice)