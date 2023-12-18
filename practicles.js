const myCanvas = document.getElementById("myCanvas");

const ctx = myCanvas.getContext("2d");

myCanvas.width = window.innerHeight;
myCanvas.height = window.innerWidth;

ctx.fillStyle = "red";
ctx.fillRect(0, 0, 230, 100);

ctx.fillStyle = "black";
ctx.fillRect(230, 100, 30, 30);

ctx.fillStyle = "black";
ctx.fillRect(260, 130, 30, 30);

ctx.fillStyle = "black";
ctx.fillRect(290, 160, 30, 30);

ctx.fillStyle = "black";
ctx.fillRect(320, 190, 30, 30);

//rektankel
// ctx.fillStyle = "green";
// ctx.rect(20, 20, 10, 100);
// ctx.fill();

// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.ellipse(60, 200, 50, 30, Math.PI * 0.3, 0, Math.PI * 1.8, true);
// ctx.fill();

// ctx.fillStyle = "blue";
// ctx.beginPath();
// ctx.ellipse(150, 200, 50, 30, Math.PI * 0.25, 0, Math.PI);
// ctx.fill();

// ctx.fillStyle = "green";
// ctx.beginPath();
// ctx.ellipse(240, 200, 50, 30, Math.PI * 0.25, 0, Math.PI, true);
// ctx.fill();

ctx.beginPath();
ctx.arc(320, 260, 50, 0, 2 * Math.PI * 1.8, true);
ctx.stroke();

ctx.beginPath();
ctx.arc(440, 260, 70, 1, 1 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(469, 368, 50, 30, Math.PI * 0.25, 0, Math.PI, true);
ctx.stroke();

ctx.fillStyle = "pink";
ctx.beginPath();
ctx.ellipse(40, 40, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
ctx.fill();

ctx.strokeStyle = "blue";
ctx.beginPath(); // Start a new path
ctx.moveTo(30, 50); // Move the pen to (30, 50)
ctx.lineTo(40, 55); // Draw a line to (150, 100)
ctx.stroke(); // Render the path

ctx.strokeStyle = "blue";
ctx.beginPath(); // Start a new path
ctx.moveTo(20, 40); // Move the pen to (30, 50)
ctx.lineTo(30, 30); // Draw a line to (150, 100)
ctx.stroke(); // Render the path

ctx.strokeStyle = "blue";
ctx.beginPath(); // Start a new path
ctx.moveTo(40, 15); // Move the pen to (30, 50)
ctx.lineTo(30, 25); // Draw a line to (150, 100)
ctx.stroke(); // Render the path

ctx.strokeStyle = "red";
ctx.beginPath(); // Start a new path
ctx.moveTo(30, 20); // Move the pen to (30, 50)
ctx.lineTo(20, 20); // Draw a line to (150, 100)
ctx.stroke(); // Render the path

ctx.strokeStyle = "red";
ctx.beginPath(); // Start a new path
ctx.moveTo(60, 50); // Move the pen to (30, 50)
ctx.lineTo(50, 60); // Draw a line to (150, 100)
ctx.stroke(); // Render the path

ctx.strokeStyle = "red";
ctx.beginPath(); // Start a new path
ctx.moveTo(35, 60); // Move the pen to (30, 50)
ctx.lineTo(30, 70); // Draw a line to (150, 100)
ctx.stroke(); // Render the path

ctx.strokeStyle = "green";
ctx.beginPath(); // Start a new path
ctx.moveTo(40, 20); // Move the pen to (30, 50)
ctx.lineTo(50, 30); // Draw a line to (150, 100)
ctx.stroke(); // Render the path

ctx.strokeStyle = "green";
ctx.beginPath(); // Start a new path
ctx.moveTo(60, 45); // Move the pen to (30, 50)
ctx.lineTo(55, 50); // Draw a line to (150, 100)
ctx.stroke(); // Render the path

ctx.strokeStyle = "green";
ctx.beginPath(); // Start a new path
ctx.moveTo(20, 50); // Move the pen to (30, 50)
ctx.lineTo(25, 40); // Draw a line to (150, 100)
ctx.stroke(); // Render the path

ctx.strokeStyle = "blue";
ctx.beginPath(); // Start a new path
ctx.moveTo(50, 20); // Move the pen to (30, 50)
ctx.lineTo(55, 30); // Draw a line to (150, 100)
ctx.stroke(); // Render the path

ctx.fillStyle = "#964B00";
ctx.beginPath();
ctx.ellipse(40, 40, 10, 10, Math.PI / 4, 0, 2 * Math.PI);
ctx.fill();

ctx.strokeStyle = "green";
ctx.beginPath(); // Start a new path
ctx.moveTo(60, 30); // Move the pen to (30, 50)
ctx.lineTo(60, 40); // Draw a line to (150, 100)
ctx.stroke(); // Render the path

ctx.fillStyle = "pink";
ctx.beginPath();
ctx.ellipse(150, 60, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "#964B00";
ctx.beginPath();
ctx.ellipse(150, 60, 10, 10, Math.PI / 4, 0, 2 * Math.PI);
ctx.fill();

console.log(ctx);
