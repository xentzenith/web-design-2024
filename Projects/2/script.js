function injectNav(){
    const nav = document.querySelector('nav');
    nav.innerHTML = `
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="calculator.html">Calculators</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="aboutus.html">Contact</a></li>
        </ul>
    `;

    const path = window.location.pathname;
    const page = path.split('/').pop();
    const links = nav.querySelectorAll('a');
    
    if(page === ''){//index.html
        links[0].classList.add('current');
        links[0].removeAttribute('href');//i prevented user to click current page link
    }
    else{
        links.forEach(link => {
            if(link.href.includes(page)){
                link.classList.add('current');
                link.removeAttribute('href');//i prevented user to click current page link
            }
        })
    }
    
}

injectNav();

function calculateCost() {
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    var height = parseFloat(document.getElementById("height").value);
    var volume = length*width*height;
    var costPerCubic = 100;
    var totalCost = volume*costPerCubic;
    document.getElementById("result").innerHTML = "Total Cost: $" + totalCost.toFixed(2);

    updateScale(volume);

    
function updateScale(volume) {
    var scale = "";
    if (volume <= 100) {
        scale = "Small";
    } else if (volume <= 200) {
        scale = "Medium";
    } else if (volume <= 300) {
        scale = "Large";
    } else if (volume <= 400) {
        scale = "Extra Large";
    } else {
        scale = "Super Large";
    }
    document.getElementById("scale").innerHTML = "Scale: " + scale;
}

}

function openCalculator(){
    //https://xentzenith.github.io/multi-purpose-calculator/  --> MY CALCULATOR that I made before.
    var calculator = window.open("https://xentzenith.github.io/multi-purpose-calculator/", "Calculator", "width=617,height=719");
    calculator.moveTo(window.screen.width - 400, 0);
}


//on countdown i got help from stackoverflow for day hour minute second calculation
function countdown(){

    var discountEndDate = new Date("2090-04-26T00:00:00").getTime();

    function update(){
        
        var now = new Date().getTime();

        var remaining = discountEndDate - now;

        var years = Math.floor(remaining / (1000 * 60 * 60 * 24 * 365));
        var days = Math.floor((remaining % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = years+ ' years '+days+" days " + hours + " hours " + minutes + ' minutes'
    }
    update();
    setInterval(update, 60000); //every 1 minute

}

/*
<ol>⭐️⭐️⭐️⭐️⭐️ <strong>Veronica:</strong> "Great service and attention to detail!"</ol>
<ol>⭐️⭐️⭐️⭐️⭐️ <strong>Veronica:</strong> "Great service and attention to detail!"</ol>
<ol>⭐️⭐️⭐️⭐️⭐️ <strong>Veronica:</strong> "Great service and attention to detail!"</ol>

give random review and star rating everytime the page is refreshed
*/

function randomReview(){
    var sentences = [
        "Great service and attention to detail!",
        "I was very satisfied with the service I received!",
        "I would definitely recommend this company to my friends!",
        "The staff was very friendly and helpful!",
        'I was very impressed with the quality of the work!',
        'The service was very fast and efficient!',
        'I would definitely use this company again!',
    ];
    var names = [
        "Veronica",
        "John",
        "Alice",
        "Bob",
    ];

    for (var i = 0; i < 3; i++) {
        var randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
        sentences.splice(sentences.indexOf(randomSentence), 1);
        var randomName = names[Math.floor(Math.random() * names.length)];
        names.splice(names.indexOf(randomName), 1);
        document.getElementById("ratingInjectArea").innerHTML += "<ol>⭐️⭐️⭐️⭐️⭐️ <strong>" + randomName + ":</strong> \"" + randomSentence + "\"</ol>";
    }
}

var form = document.getElementById("contactFormss"); 
form.addEventListener("submit", function(event){
    event.preventDefault();
    submitForm();
});


//sweet alert package for the form submission
//https://sweetalert2.github.io/ --> SweetAlert2
function submitForm(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your message has been sent! We will touch you soon.",
        showConfirmButton: false,
        width: "20rem",
        timer: 1500
      });
}