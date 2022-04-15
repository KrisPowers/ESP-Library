(function() {

    // === Ad Picker

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };

    choices = ["0","1","2"]

    const Pick = getRandomInt(3)

    // === Ad Sense 1
    if(Pick === "0"){

        document.getElementById("adsense").src="./assets/ad/img1.jpg";
        adsense.width = 100
        adsense.height = 100

    };

    // === Ad Sense 2
    if(Pick === "1"){

        document.getElementById("adsense").src="./assets/ad/img2.jpg";
        
    };

    // === Ad Sense 3
    if(Pick === "2"){

        document.getElementById("adsense").src="./assets/ad/img3.jpg";

    };


})()