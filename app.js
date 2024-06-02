

const div = document.querySelector('#div');

axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data)
    res.data.map((item)=>{
        div.innerHTML += `
        <div class="card" style="width: 18rem;">
 <div class="card-body">
   <h5 class="card-title">${item.title}</h5>
   <img width="80" src="${item.image}" height="30%" alt="product-image">
   <h6 class="card-subtitle mb-2 text-body-secondary">${item.price}</h6>
   
   <button>card link</button>
   <button>Another link</button>
   
 </div>
</div>
               `
    })
}).catch((err)=>{
    console.log(err);
 })








{/* <h1> title : ${item.title}</h1>
<img width="200" src="${item.image}" alt="image"/>
<h1> price : ${item.price}</h1>
<hr/> */}































