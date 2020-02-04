let latitude = "40.2398"
    let longitude = "-76.9200"

    function latFunc() {
        let latitude = document.getElementById("lat").value;
        console.log(latitude);
    }

    function longFunc() {
        let longitude = document.getElementById("long").value;
        console.log(longitude);
    }


function callApi() {
    const latitude = document.getElementById("lat").value;
    let longitude = document.getElementById("long").value;
  console.log("latitude: " + latitude);
   console.log("longitude: " + longitude);
 var url = "https://www.hikingproject.com/data/get-trails?lat=" + latitude + "&lon=" + longitude + "&maxDistance=10&key=200441732-638bb9d20ee445380f3da709a8c7ebbe";
 console.log(url);
   
 $.getJSON(url, function (data) {
 console.log(data);
 console.log(data.trails[0].location);

 let image = data.trails[0].imgSmallMed;
 let name = data.trails[0].name
 let stars = data.trails[0].stars
 let starvotes = data.trails[0].starVotes
 let location = data.trails[0].location
 let length = data.trails[0].length
 let ascent = data.trails[0].ascent
 $('.image').attr('src', image);
 $('.name').append(name);
 $('.stars').append(stars);
 $('.starvotes').append(starvotes);
 $('.location').append(location);
 $('.length').append(length);
 $('.ascent').append(ascent);
 }
);
 };

 

