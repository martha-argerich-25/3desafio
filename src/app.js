import express from "express"
import ProductManager from "./ProductManager"
const manager = new ProductManager
const app = express();








// DEVUELVE LOS PRODUCTOS//
app.get("/product",async(req,res)=>{

const products = await manager.getProducts();

const {limit} = req.query
//para que devuelva la cantidad de productos puede ser  produc.number??,
if(limit === number){
return res.send(products.number)
}



})




//DEVUELVE LOS PRODUCTOS POR ID
app.get("/product/:id",async (req,res)=>{

  const {id} = req.params;

const productId = products.find ((p)=> p.id=== id)

res.send(productId)

})



// ESCUCHA LA LLAMADA
app.listen(8080,()=>{
    console.log(" el servidor esta escuchando el puerto 8080")
})