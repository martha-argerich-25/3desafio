import express from "express"
import ProductManager from "./ProductManager.js"
const manager = new ProductManager();
const app = express();



// DEVUELVE LOS PRODUCTOS//
app.get("/products", async (req,res) => {
  const {limit} = req.query;

  if(!limit){
     const prods = await manager.getProducts(); 
     await res.send(prods);
  }
  
  const prods = await manager.getProducts();
  const filtered = prods.splice(0,limit);
  await res.send(filtered);
});




//DEVUELVE LOS PRODUCTOS POR ID
app.get("/products/:id", async (req,res)=>{

  const products = await manager.getProducts();

  const {id} = req.params;

const productId = await products.find ((p)=> p.id=== id)

res.send(productId)
});
 


// ESCUCHA LA LLAMADA
app.listen(8080,()=>{
    console.log(" el servidor esta escuchando el puerto 8080")
});