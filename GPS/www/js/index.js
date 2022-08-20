document.getElementById("getPosition").addEventListener("click", getPosition);
function getPosition() {
  
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError);
    
   function onSuccess(position) {
     document.getElementById("p1").innerHTML="LATITUDE   "+position.coords.latitude;
    document.getElementById("p2").innerHTML="LONGITUDE  "+position.coords.longitude;
//      alert(
//          
//          'Latitude: '          + position.coords.latitude          + '\n' +
//         'Longitude: '         + position.coords.longitude         + '\n' 
// 
//         );
   };

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}