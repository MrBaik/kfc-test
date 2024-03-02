 

 function App() {

//   let marks=[10,20,30,40,0,80,89,99];

const product ={
  
  id: 1,
  title:"Hot Wings Bucket" ,
  desc:"KFc chicken worlds favorite get it now.KFc chicken worlds favorite get it now.",
  price: 550,
  image:"/kfc.png",
  
}
  return (
   <>
   
   <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={product.image} />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.desc}</p>
    <a href="#" className="btn btn-primary">Buy Now  </a>
  </div>
</div>
</>
  )
}


export default App;
