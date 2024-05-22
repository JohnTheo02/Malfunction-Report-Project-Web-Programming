// Initialize and add the map
let map;

const university_bounds = {
  east:21.80269,
  west:21.77475,
  north:38.29855,
  south:38.27416
}

async function initMap() {
  // The location of the University
  const university = { lat: 38.28942365429907, lng: 21.785347539226155 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at the University of Patras
  let map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: university,
   // restriction: {
    //  latLngBounds: university_bounds,
     // strictBounds: false
    //},
    mapId: "DEMO_MAP_ID",
    gestureHnadling: "cooperative",
    zoomControl:false,
    streetViewControl:false,
    fullscreenControl:false,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    }
  });

  // Marker always centered
  let marker = new google.maps.Marker({
    map: map,
    position: university,
    title: "Τοποθεσία Βλάβης",
  });
  google.maps.event.addListener(map, 'center_changed', () => {
    marker.setPosition(map.getCenter());
  });

  // GPS Button
  var gpsButton = document.getElementById('gps');
  gpsButton.addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);
        }, function() {
            // Handle geolocation error
            alert('Geolocation service failed.');
        });
    } else {
        // Browser doesn't support geolocation
        alert('Your browser does not support geolocation.');
    }
    });

    // Select Button
    var txtInput = document.getElementById('textInput');
    var selectButton = document.getElementById('select');
    selectButton.type ="submit"
    selectButton.addEventListener('click', function(){
      let center = map.getCenter();
      let latitude = center.lat();
      let longitude = center.lng()
      let LatStr = String(latitude)
      let LngStr = String(longitude)
      
      console.log("Longitude and Latitude:", LngStr+","+LatStr);
      
      txtInput.value =  LngStr+","+LatStr;
      console.log(txtInput.value);
      /* window.location.href = "/form2"; */ 
    })
}

function loadScript() {
  const scriptContent = (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
    ({key: "AIzaSyAkpe8cI1t7PmGXu6PtOIFuSzEhYE97ZRM", v: "weekly"});
  const script = document.createElement("script");
  script.text = scriptContent;
  document.body.appendChild(script);
  window.onload = loadScript;
}

loadScript();
initMap();