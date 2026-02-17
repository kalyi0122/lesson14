let products = [
    {
        id:1,
        image:"https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg",
        price:120,
        name:"Клубника"
    },
     {
        id:2,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWh-E-5rCitwZiTaKzesMB6kupUh0TRu1FQ&s",
        price:130,
        name:"Банан"
    },
     {
        id:3,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_Db0jJvWe6vYScLksI8qoM2WCeHfJnSBVw&s",
        price:80,
        name:"Apple"
    },
     {
        id:4,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_Db0jJvWe6vYScLksI8qoM2WCeHfJnSBVw&s",
        price:150,
        name:"Малина",

    },
    {
        id:5,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDEtTBgWSW67U8QG_eAtijIgfWmaCJDdHzg&s",
        price:90,
        name:"Груша",
    }

]

let result = document.querySelector(".result")

result.innerHTML = products.map((item) =>{
    return`
    <div class="card">
     <img src=${item.image}/>
     <div>
      <h2>${item.name}</h2>
      <h4>${item.price}</h4>
     </div>
    </div>`
}).join("n ")