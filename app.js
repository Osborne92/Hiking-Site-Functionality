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
            let i;
            for (i = 0; i < trails.length; ++i) {
                let image = data.trails[i].imgMedium;
                let name = data.trails[i].name  
                let stars = data.trails[i].stars
                let starvotes = data.trails[i].starVotes
                
                $('.card-columns').append('<div class="card bg-dark text-white"><img class="card-img" src="' + image + '"/><div class="card-img-overlay"> <p class="name">' + name + '</p><p class="stars">' + stars + " stars" + '</p><p class="starvotes">' + starvotes + " votes" + '</p></div></div>');
             };
            $('img').on("error", function() {
                $(this).attr('src', `https://source.unsplash.com/collection/${244339}`);
              });
            })
        });
    }

// 'https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'







