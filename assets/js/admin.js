var check=0;
var temp;
var addBtn=document.getElementById("addBtn");
var removeAll=document.getElementById("removeAll");
var updateBtn=document.getElementById("updateBtn");

var addConfirm=document.getElementById("addConfirm");
var addCancle=document.getElementById("addCancle");

var addName=document.getElementById("addName");
var addDate=document.getElementById("addDate");
var addType=document.getElementById("addType");
var addImg=document.querySelector("#addImg");
var uploaded_image;
var addCancle=document.getElementById("addCancle");

var data=document.getElementById("data"); 

var upName=document.getElementById("upName");
var upDate=document.getElementById("upDate");
var upType=document.getElementById("upType");
var imgUpdate=document.querySelector("#imgUpdate");
var updated_image;
var updateConfirm=document.getElementById("updateConfirm");
var updateCancle=document.getElementById("updateCancle");

var removeAll=document.getElementById("removeAll");

var admainSearch=document.getElementById("admainSearch");

$(".addForm .container").hide();
$(".updateForm .container").hide();


addBtn.addEventListener('click',function(){
  $(".addForm  .container").fadeIn(1000);
  $(".updateForm .container").hide();
})

$(".updateForm .container").hide();
updateBtn.addEventListener('click',function(){
    $(".updateForm  .container").show(1000);
    $(".addForm .container").hide();
})



if(localStorage.getItem("animes")){
  //  localStorage.getItem("anime");
   var animes=JSON.parse(localStorage.getItem("animes"));
   displayData();
}
else{
    var animes=[];
    localStorage.setItem("animes",JSON.stringify(animes));
}

admainSearch.onkeyup=function(){
    var res=``;
    for(var i=0;i<animes.length;i++){
       // 

        if(animes[i].type.toLowerCase().includes(admainSearch.value.toLowerCase())){
        res+=`
        <tr>
        <td>${animes[i].name}</td>
        <td>${animes[i].date}</td>
        <td>${animes[i].type}</td>
        <td><img src="${animes[i].img}" class="img-fluid"></td>
        <td><button class="btn text-white bg-opacity-50 text-center" onclick="updateRow(${i})"><i class="fa fa-wrench text-white" aria-hidden="true"></i></button></td>
        <td><button class="btn text-white bg-opacity-50 text-center" onclick="deleteRow(${i})"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
        </tr>
        `
    }
}
    data.innerHTML=res;
}


addImg.addEventListener("change", function() {
        const reader = new FileReader();
        reader.addEventListener("load", function() {
            uploaded_image = reader.result; //here we have the img 
            
        });
       reader.readAsDataURL(this.files[0]);
});


addConfirm.addEventListener('click',function(){
   anime={
       name:addName.value,
       date:addDate.value,
       type:addType.value,
       img:uploaded_image,
   }
   animes.push(anime);
   localStorage.setItem("animes",JSON.stringify(animes));
   displayData();
   addClearIn();
});

function  displayData(){
    res=``
    for(var i=0;i<animes.length;i++){
        res+=`
        <tr>
        <td>${animes[i].name}</td>
        <td>${animes[i].date}</td>
        <td>${animes[i].type}</td>
        <td><img src="${animes[i].img}" class="img-fluid"></td>
        <td><button class="btn text-white bg-opacity-50 text-center" onclick="updateRow(${i})"><i class="fa fa-wrench text-white" aria-hidden="true"></i></button></td>
        <td><button class="btn text-white bg-opacity-50 text-center" onclick="deleteRow(${i})"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
        </tr>
        `
    }
    data.innerHTML=res;
    //
}
imgUpdate.addEventListener("change", function() {
   check=1;
    const reader = new FileReader();
    reader.addEventListener("load", function() {
        updated_image = reader.result; //here we have the img 
    });
   reader.readAsDataURL(this.files[0]);
});
function updateRow(id){

    upName.value=animes[id].name;
    upDate.value=animes[id].date;
    upType.value=animes[id].type;
    temp=animes[id].img;
     
    updateConfirm.addEventListener('click',function(){

        animes[id].name= upName.value;
        animes[id].date=upDate.value;
        animes[id].type=upType.value;
        if(check==1){ animes[id].img=updated_image;}
        else{ animes[id].img=temp;}
        localStorage.setItem("animes",JSON.stringify(animes));
        displayData();
        updateClearIn();
    })
    check=0;
   
}


removeAll.addEventListener('click',function(){
    localStorage.removeItem("animes");
    displayData();
})

addCancle.addEventListener('click',function(){
    addClearIn();
})
updateCancle.addEventListener('click',function(){
    updateClearIn();
})

function deleteRow(id){
    animes.splice(id,1);
    localStorage.setItem("animes",JSON.stringify(animes));
    displayData();
  }

function addClearIn(){
    addName.value="";
    addDate.value="";
    addType.value="";
    uploaded_image="";

   
   
}
function updateClearIn(){
    upName.value="";
    upDate.value="";
    upType.value="";
}
function hi(){
    alert("hi")
}