import express from "express"
import ProductManager from "./ProductManager.js"

const manager = new ProductManager
const app = express();



// DEVUELVE LOS PRODUCTOS//
app.get("./products",async (req,res)=>{

  const products = await manager.getProducts();

  const {limit} = req.query
  if(limit === Number){
    res.send(products.lenght)
  }

 
//para que devuelva la cantidad de productos que hay


});


//DEVUELVE LOS PRODUCTOS POR ID
app.get("./products/:id", async (req,res)=>{
  
  const {id} = req.params;

const productId = await products.find ((p)=> p.id=== id)

res.send(productId)
})
 





// ESCUCHA LA LLAMADA
app.listen(8080,()=>{
    console.log(" el servidor esta escuchando el puerto 8080")
});