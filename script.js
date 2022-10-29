
    let fetchDetails = (url) => {
      return fetch(url).then(res => res.json());
    }
    let makeup = async () => {
      try{
        let result = await fetchDetails(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${document.getElementById("main").value}`);
        console.log(result);
        let result_container = document.createElement("div");
        result_container.style.width = '600px';
        result_container.setAttribute("class","result_container");
        let result_image = document.createElement("img");
        result_image.style.width = '200px';
        result_image.url = result.image_link;
        let result_name = document.createElement("h4");
        result_name.style.width = '200px';
        result_name.innerText = result.name;
        let result_desc = document.createElement("p");
        result_desc.style.width = '200px';
        result_desc.innerText = result.description;
        result_container.append(result_image, result_name, result_desc);
        document.body.append(result_container);
      }
      catch{
        console.log('got error');
        let error_box = document.createElement("div");
        error_box.setAttribute("class","error_box");
        error_box.style.width = '600px';
        error_box.innerText = "Sorry, There is no such product.";
        document.body.append(error_box);
      } 
    }
    
    let div=document.createElement("div");
    div.setAttribute("class","main1");
    
    let formgroup=document.createElement("div");
    formgroup.setAttribute("class","form-group");
    
    
    let input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("class","form-control");
    input.setAttribute("id","main");
    input.setAttribute("placeholder","brand");
    input.style.width="520px";
    input.style.padding="10px";
    
    let button=document.createElement("button");
    button.setAttribute("type","button");
    button.classList.add("btn","btn-primary");
    button.innerHTML="Search";
    button.style.marginTop="20px";
    button.style.padding="6px";
    button.addEventListener("click",makeup);
    
    let name=document.createElement("div");
    name.setAttribute("id","name");
    
    formgroup.append(input,button,name);
    
    
    
    div.append(formgroup);
    document.body.append(div);
    //try {
    // let brand =document.getElementById("main").value;
    // console.log(brand);
    // let res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json' ${brand}`);
    // let res1= await res.json();
    // console.log(res1);
    // //998
    // var index=res1.length-1;
    // //res1[998].Active
    // console.log(res1[index].brand);
    // brand.innerHTML=`brand name :${res1[index].brand}`;
    // } catch (error) {
    //   console.log(error);
    // }
    // }