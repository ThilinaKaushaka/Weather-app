let latitude="";
let longitude="";

printWeather();

function printWeather(){
    setTimeout(() => {
            Coordinates();
            fetch("http://api.weatherapi.com/v1/current.json?key=49c0a9ab86804f3fa9b170605241812&q="+latitude+","+longitude)
            .then(res=>res.json())
            .then(data=>{
            console.log(data);


            print(data);

    });
    }, 4000);
}




Coordinates();

function Coordinates() {
    navigator.geolocation.watchPosition(assingCoordinates);
}
  
function assingCoordinates(position) {
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;

    
   


   
    
}

function printx(){
    
    console.log(latitude);
    console.log(longitude);
    
}


function print(data) {
    document.getElementById("info").innerHTML=`
        <h1></h1>
        <br><br>
        
        <div class="row d-flex justify-content-center align-items-center">
            <br>
            <div class="card mb-3 rounded-5" style="max-width: 90%;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${data.current.condition.icon}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${data.location.name}</h5>
                      <p class="card-text">This is a wider card w
                        <br><br><br>ith supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
        </div>

        <br>
    
    
    
    
    
    
    
    
    
    `;
}
