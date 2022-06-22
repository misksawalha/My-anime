var allAnime=document.getElementById("allAnime");
var action=document.getElementById("action");
var family=document.getElementById("family");
var comedy=document.getElementById("comedy");
var card=document.getElementById("card");

var clientSearch=document.getElementById("clientSearch");
var searchBtn=document.getElementById("searchBtn");
var searchValue;
var myImg=document.getElementById("myImg");
var animes=[];
animes=JSON.parse(localStorage.getItem("animes"));

displayAll();
allAnime.addEventListener('click',function(){
  displayAll();
})

action.addEventListener('click',function(){
    displayAction();
});

family.addEventListener('click',function(){
    displayFamily();
});

comedy.addEventListener('click',function(){
    displayComedy();
});

clientSearch.onkeyup=function(){
    var out=``;
    for(var i=0;i<animes.length;i++){
       // 

        if(animes[i].type.toLowerCase().includes(clientSearch.value.toLowerCase()))
            
            
            out+=`
        <div  id="card" class="col-md-4 my-2">
        <div id="" class="card" style="width: 18rem;">
            <img src="${animes[i].img}" class="card-img-top" style="height: 404px;" alt="...">
            <div class="card-body">
            <h5 class="card-text text-capitalize">Name: ${animes[i].name}</h5>
            <h5 class="card-text text-capitalize">Show time: ${animes[i].date}</h5>
            <h5 class="card-text text-capitalize">Type: ${animes[i].type}</h5>
            </div>
            </div>
            </div>
        `
    
        
    }
    card.innerHTML=out; 
    
}

function displayAll(){
    
    var out=``;
    for(var i=0;i<animes.length;i++){
    
        out+=`
        <div  id="card" class="col-md-4 my-2">
        <div id="" class="card" style="width: 18rem;">
            <img src="${animes[i].img}" class="card-img-top" style="height: 404px;" alt="...">
            <div class="card-body">
            <h5 class="card-text text-capitalize">Name: ${animes[i].name}</h5>
            <h5 class="card-text text-capitalize">Show time: ${animes[i].date}</h5>
            <h5 class="card-text text-capitalize">Type: ${animes[i].type}</h5>
            </div>
            </div>
            </div>
        `
    }
    card.innerHTML=out;
}

function displayComedy(){
    var out=``;
    for(var i=0;i<animes.length;i++){
        if(animes[i].type.toLowerCase()=="comedy"){
        out+=`
        <div  id="card" class="col-md-4 my-2">
        <div id="" class="card" style="width: 18rem;">
            <img src="${animes[i].img}" class="card-img-top" style="height: 404px;" alt="...">
            <div class="card-body">
            <h5 class="card-text text-capitalize">Name: ${animes[i].name}</h5>
            <h5 class="card-text text-capitalize">Show time: ${animes[i].date}</h5>
            <h5 class="card-text text-capitalize">Type: ${animes[i].type}</h5>
            </div>
            </div>
            </div>
        `
    }
}
    card.innerHTML=out;
}
function displayFamily(){
    var out=``;
    for(var i=0;i<animes.length;i++){
        if(animes[i].type.toLowerCase()=="family"){
        out+=`
        <div  id="card" class="col-md-4 my-2">
        <div id="" class="card" style="width: 18rem;">
            <img src="${animes[i].img}" class="card-img-top" style="height: 404px;" alt="...">
            <div class="card-body">
            <h5 class="card-text text-capitalize">Name: ${animes[i].name}</h5>
            <h5 class="card-text text-capitalize">Show time: ${animes[i].date}</h5>
            <h5 class="card-text text-capitalize">Type: ${animes[i].type}</h5>
            </div>
            </div>
            </div>
        `
    }
}
    card.innerHTML=out;
}
function displayAction(){
    var out=``;
    for(var i=0;i<animes.length;i++){
        if(animes[i].type.toLowerCase()=="action"){
        out+=`
        <div  id="card" class="col-md-4 my-2">
        <div id="" class="card" style="width: 18rem;">
            <img src="${animes[i].img}" class="card-img-top" style="height: 404px;" alt="...">
            <div class="card-body">
            <h5 class="card-text text-capitalize">Name: ${animes[i].name}</h5>
            <h5 class="card-text text-capitalize">Show time: ${animes[i].date}</h5>
            <h5 class="card-text text-capitalize">Type: ${animes[i].type}</h5>
            </div>
            </div>
            </div>
        `
    }
}
    card.innerHTML=out;
}
