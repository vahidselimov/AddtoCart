let url=`https://fakestoreapi.com/products`
fetch(url).then(res=>res.json()).then((datas)=>{
    let container=document.createElement("div")
    container.className="container"
    let row=document.createElement("div")
    row.className="row"
    let body=document.querySelector("body")
    
    datas.forEach(data => {
        
        if (data.id>0&&data.id<11) {
            let photos=document.createElement("div")
            photos.className="photos col-lg-6 col-md-6"
let image=document.createElement("img")
image.src=data.image
image.alt="image"
image.className="image"
let product=document.createElement("div")
product.className="product col-lg-6 col-md-6"
let category=document.createElement("div")
category.className="category"
let title=document.createElement("p")
title.className="title"
title.innerText=data.title
let star_icon=document.createElement("div")
star_icon.className="star-icon"
let i =document.createElement("i")
i.className="fa-solid fa-star"
let price =document.createElement("div")
price.className="price"
price.innerText=`${data.price }$`
let Model=document.createElement("ul")
Model.className="model"
let Brand=document.createElement("li")
Brand.className="brand"
Brand.innerText="Brands"
let Markas=document.createElement("span")
Markas.className="markas"
Markas.innerText="Balenciaga"
let hr=document.createElement("hr")
let form=document.createElement("form")
form.action=`index2.html?dataid=${data.id}`
let label=document.createElement("label")
label.setAttribute("for","quantity")
label.innerText="number"
let input1=document.createElement("input")
input1.type="number"
input1.id=data.id
input1.name="quantity"
input1.min="1"
input1.max="10"
let input2=document.createElement("input")
input2.type="submit"
input2.innerText="Click button"
let a=document.createElement("a");
let dataId = data.id
a.href=`index2.html?dataid=${dataId}`
        a.target="_blank"
        a.innerText="Add To Click"
        console.log(a);

        //-----------------------------------------------//

        photos.appendChild(image)
        product.appendChild(category)  
        category.appendChild(title)
        star_icon.appendChild(i)
        product.appendChild(price)
        Model.appendChild(Brand)
        Brand.appendChild(Markas)
        product.appendChild(Model)
        product.appendChild(hr)
        form.appendChild(label)
        form.appendChild(input1)
        form.appendChild(input2)
        product.appendChild(form)
        product.appendChild(a)
        row.appendChild(photos)
        row.appendChild(product)



        }


    });
   container.appendChild(row)
   body.prepend(container)
// alert("Bir məhsuldan ən çox 10 dənə almaq olar!!!!!")

})