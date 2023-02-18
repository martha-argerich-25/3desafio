import express from "express"
import ProductManager from "./ProductManager.js"

const manager = new ProductManager("./productos.json");
const app = express();



// DEVUELVE LOS PRODUCTOS//
app.get("/products", async (req,res) => {
  const {limit} = req.query;

  if(!limit){
     const products = await manager.getProducts(); 
     return res.send(products);
  }
  const products = await manager.getProducts()
  const filtered =  products.splice(0,limit);

   return res.send(filtered);
});



//DEVUELVE LOS PRODUCTOS POR ID


app.get('/products/:id',async (req, res) => {
   const {id} = req.params
 
   const num = parseInt(id)
    res.json( await manager.getProducts(num))
   
 
   
 })
 


// ESCUCHA LA LLAMADA
app.listen(8080,()=>{
    console.log(" el servidor esta escuchando el puerto 8080")
});