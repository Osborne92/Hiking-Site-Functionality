// const button = document.querySelector('button')

// document.getElementById("latitudeInput").value = "enter the latitude of your hiking destination";
// document.getElementById("longitudeInput").value = "enter the latitude of your hiking destinition";

// function getValue() {
//     let longitudeInput = document.getElementById('longitudeInput').value;
//     let latitudeInput = document.getElementById('latitudeInput').value;
//     latitudeInput == latitude
//     longitudeInput == longitude
//     location.reload(true);
//     }

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

    latFunc();
    longFunc();

$.getJSON("https://www.hikingproject.com/data/get-trails?lat=" + latitude + "&lon=" + longitude + "&maxDistance=10&key=200441732-638bb9d20ee445380f3da709a8c7ebbe", function (data) {
    

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

