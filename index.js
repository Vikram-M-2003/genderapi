let btn =document.getElementById("btn");
let error = document.getElementById("error")
let output = document.getElementById("output")
let dataname = document.getElementById("dataname")
let gendericon = document.getElementById("gendericon")
let datagen = document.getElementById("datagen")
let prob = document.getElementById("prob")

btn.addEventListener("click",()=>{
    let url ="https://api.genderize.io?name=";
    let name = document.getElementById("name").value;
    let finalurl = url+name;
    console.log(name);
    console.log(finalurl);
    
    if(name.length > 0 && /^[A-Za-z]/.test(name)){
        fetch(finalurl).then((res)=>res.json()).then((data)=>{
            console.log(data);
            let newdiv = document.createElement("div");
            output.appendChild(newdiv);
            newdiv.setAttribute("id","info");
            newdiv.appendChild(dataname)
            newdiv.appendChild(gendericon)
            newdiv.appendChild(datagen)
            newdiv.appendChild(prob)
            if(data.gender == "male"){
                dataname.innerHTML = name
            datagen.innerHTML = data.gender
            gendericon.setAttribute('src','male.svg')
            prob.innerHTML = "probability"+":"+data.probability
            newdiv.classList.add("male")
            }
            else{
                dataname.innerHTML = name
            datagen.innerHTML = data.gender
            gendericon.setAttribute('src','female.svg')
            prob.innerHTML = "probability"+":"+data.probability
            newdiv.classList.add("female")
            }
        })
    }
    else{
        alert("Enter a valid name with no Spaces")
    }
}) 


// btn.addEventListener("click",()=>{
//     let url ="https://api.genderize.io?name=";
//     let name = document.getElementById("name").value;
//     let finalurl = url+name;
//     console.log(name);
//     console.log(finalurl);
    
//     if(name.length > 0 && /^[A-Za-z]/.test(name)){
//         fetch(finalurl).then((res)=>res.json()).then((data)=>{
//             console.log(data);
//             let newdiv = document.createElement("div");
//             output.appendChild(newdiv);
//             newdiv.setAttribute("id","info");
//             newdiv.innerHTML =`<h3 id="dataname">${data.name}</h3> <img src="" id="gendericon"> <h1 id="datagen">${data.gender}</h1><h4 id="prob">Probability: ${data.probability}</h4>`;
//             if(data.gender == "female"){
//                 newdiv.classList.add("female")
//                 document.getElementById("gendericon")
//                 .setAttribute("src","female.svg")

//             }
//             else{
//                 newdiv.classList.add("male")
//                 document.getElementById("gendericon")
//                 .setAttribute("src","male.svg")
//             }
//         })
//     }
//     else{
//         alert("Enter a valid name with no Spaces")
//     }
//     // setInterval(() => {
//     //     location.reload()
//     // }, 4000);
// }) 






