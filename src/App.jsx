 

 function App() {

 const products =[
{
  
  id: 1,
  title:"Hot Wings Bucket 1" ,
  desc:"KFc chicken worlds favorite get it now.KFc chicken worlds favorite get it now.",
  price: 550,
  image:"/kfc.png",
  
},
{
  
  id: 2,
  title:"Hot Wings Bucket 2" ,
  desc:"KFc chicken worlds favorite get it now.KFc chicken worlds favorite get it now.",
  price: 550,
  image:"/kfc.png",
  
},
{
  
  id: 3,
  title:"Hot Wings Bucket 3" ,
  desc:"KFc chicken worlds favorite get it now.KFc chicken worlds favorite get it now.",
  price: 550,
  image:"/kfc.png",
  
},
{
  
  id: 4,
  title:"Hot Wings Bucket 4" ,
  desc:"KFc chicken worlds favorite get it now.KFc chicken worlds favorite get it now.",
  price: 550,
  image:"/kfc.png",
  
},
{
  
  id: 5,
  title:"Hot Wings Bucket 5" ,
  desc:"KFc chicken worlds favorite get it now.KFc chicken worlds favorite get it now.",
  price: 550,
  image:"/kfc.png",
  
},
{
  
  id: 6,
  title:"Hot Wings Bucket 6" ,
  desc:"KFc chicken worlds favorite get it now.KFc chicken worlds favorite get it now.",
  price: 550,
  image:"/kfc.png",
  
}
]
  return (
   <>

<div className="row">

 


{products.map((products) =>(
  
 <div className="col-sm-6" key={product.id}>

  <div className="card" style={{width: "18rem"}}>
 <img className="card-img-top" src={product.image} />
 <div className="card-body">
   <h5 className="card-title">{product.title}</h5>
   <p className="card-text">{product.desc}</p>
   <a href="#" className="btn btn-primary">Buy Now  </a>
 </div>
</div>

</div>
  
)  
  ))}


  </div>
</>

  );
}


export default App;





// // array of objects
// function App() {
//   return (
//     <div className="container my-5">
//     <div className="row row-cols-1 row-cols-md-4 g-4">
//       {products.map((product) => (
//         <div className="col" key={product.id}>
//           <div className="card">
//             <img src={product.image} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">
//                 {product.title}{" "}
//                 <span className="badge text-bg-primary">
//                   Rs. {product.price}
//                 </span>
//               </h5>
//               <p className="card-text">{product.desc}</p>
//               <a href="#" className="btn btn-primary">
//                 Add to Cart
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// }

// export default App;