console.log("this is we");
let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let c = canvas.getContext("2d");

/* c.fillStyle = "yellow";
c.fillRect(100,100,100,100);
c.fillStyle = "lightgreen";
c.fillRect(400,100,100,100);
c.fillStyle = "purple";
c.fillRect(300,300,100,100);

console.log(canvas); */

//line

/* c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);

c.strokeStyle = "skyblue";
c.stroke(); */

// Arc / circle
//c.beginPath();
//c.arc(300, 300 , 30, Math.PI * 2, false);
//c.strokeStyle = "black";
//c.stroke();


// to make more than one circle raddoml with furnctions
/* for (let i = 0  ; i < 6; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
c.beginPath();
c.arc(x, y , 30, Math.PI * 2, false);
c.strokeStyle = "black";

c.stroke();} */

let mouse ={
    x: undefined,
     y: undefined
}
let maxRadius =40;
let minRadius = 2;

let colorArray = [
   /*  "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
     "pink",
    "purple",
    "teal",
    "lime",
    "silver",
    "teal",
     "gray",
     "brown",
    "cyan",
    "magenta",
     "lime",
     "silver", */

     "#9491D9",
     "#163359",
     "#3F8C61",
     "#194023",
     "#8FBF60"
];

window.addEventListener("resize", function (){
    canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

});


window.addEventListener ('mousemove',
    function(event) {
        mouse.x =event.x;
        mouse.y = event.y;

    }
);

//use this function to create multiple circles
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx =dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor (Math.random()* colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        /* c.strokeStyle = "skyblue";
        c.stroke(); */
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function() { 
if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
    this.dx = -this.dx;
}

if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
    this.dy = -this.dy;
}

this.x += this.dx;
this.y += this.dy;

// interactivity

if ( mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
    if(this.radius < maxRadius) {
        this.radius += 1;
    }
}   else if ( this.radius > this.minRadius) {
    this.radius -= 1;
}


this.draw();
} }

/* let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx= (Math.random() - 0.5) * 9;
let dy= (Math.random() - 0.5) * 9;
let radius = 30; */
let circleArray = [];
    console.log(circleArray);

function init() {
    circleArray=[];

    for (let i = 0; i < 1000 ; i++) {
        let radius = Math.random() * 5 +1;   
        let x = Math.random() * (innerWidth - radius * 2) +radius;
        let y = Math.random() * (innerHeight - radius * 2) +radius;
        let dx= (Math.random() - 0.5) ;
        let dy= (Math.random() - 0.5) ;  
            circleArray.push(new Circle( x, y, dx, dy, radius));
        }
    }

// to make circle bounce off the corner of the screen


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}
init();
animate();