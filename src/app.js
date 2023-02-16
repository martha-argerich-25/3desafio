import express from "express"
import ProductManager from "./ProductManager.js"
const manager = new ProductManager
const app = express();

const products = await manager.getProducts();

// DEVUELVE LOS PRODUCTOS//
app.get("/product",async(req,res)=>{

  const products = await manager.getProducts();
const {limit} = req.query
//para que devuelva la cantidad de productos que hay
if(limit === number){
return res.send(products.length)
} 

});


//DEVUELVE LOS PRODUCTOS POR ID
app.get("/product/:id",async (req,res)=>{

  const {id} =   req.params;

const productId = await products.find ((p)=> p.id=== id)
if(p.id === id){
  res.send(productId)
}else {
  throw new error (`ese ID no existe en el registro de productos`)
}

});



// ESCUCHA LA LLAMADA
app.listen(8080,()=>{
    console.log(" el servidor esta escuchando el puerto 8080")
});