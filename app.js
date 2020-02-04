    // let latitude = "40.2398"
    // let longitude = "-76.9200"

function callApi() {
    let latitude = document.getElementById("lat").value;
    let longitude = document.getElementById("long").value;
    console.log("latitude: " + latitude);
    console.log("longitude: " + longitude);
    const url = "https://www.hikingproject.com/data/get-trails?lat=" + latitude + "&lon=" + longitude + "&maxDistance=10&key=200441732-638bb9d20ee445380f3da709a8c7ebbe";
    console.log(url);

    $.getJSON(url, function (data) {
        console.log(data);
        console.log(data.trails[0].location);

        $.each(data, function (index, trails) {
            console.log(trails[2])
            var i;
            for (i = 0; i < trails.length; ++i) {
                let image = data.trails[i].imgSmallMed;
                let name = data.trails[i].name
                let stars = data.trails[i].stars
                let starvotes = data.trails[i].starVotes
                let location = data.trails[i].location
                let length = data.trails[i].length
                let ascent = data.trails[i].ascent
                $('.trail-container').append('<div class="image"><img src="' + image + '"/></div><p class="name">' + name + '</p><p class="stars">' + stars + '</p><p class="starvotes">' + starvotes + '</p><p class="location">' + location + '</p><p class="length">' + length + '</p><p class="ascent">' + ascent + '</p>');
            };
        })
    });
}