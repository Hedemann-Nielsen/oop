class myCircle {
	constructor(ctx) {
		this.ctx = ctx;
		// ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)

		this.updateRect();
	}

	updateRect() {
		const x = Math.random() * myCanvas.width;
		const y = Math.random() * myCanvas.height;

		ctx.beginPath();
		ctx.ellipse(x, y, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
		ctx.fill();

		const xt = Math.random() * myCanvas.width;
		const yt = Math.random() * myCanvas.height;
		const size = 30;
		ctx.beginPath();
		ctx.moveTo(xt, yt);
		ctx.lineTo(xt + size, yt);
		ctx.lineTo(xt + size / 2, yt + size);
		ctx.closePath();
		ctx.fill();
		this.drawRect();
	}

	drawRect() {
		this.ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 10}, ${
			Math.random() * 255
		},${Math.random()})`;

		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

const myCanvas = document.getElementById("myCanvas");

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

const ctx = myCanvas.getContext("2d");

let myArray = [];

for (let i = 0; i < 100; i++) {
	myArray.push(new myCircle(ctx));
}

var myTimer = setInterval(change, 200);

function change() {
	ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

	myArray.forEach((element) => {
		element.updateRect();
	});
}

class Controller {
	constructor(canvas, ctx) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.width = canvas.width;
		this.height = canvas.height;
		this.particles = [];
		this.numParticles = 20;
		this.createParticles();
	}

	createParticles() {
		for (let index = 0; index < this.numParticles; index++) {
			this.particles.push(new Particle(this));
		}
	}

	handleParticle() {
		this.particles.forEach((particle) => {
			particle.update();
			particle.draw(this.ctx);
		});
	}
}

class Particle {
	constructor(controller) {
		this.controller = controller;
		this.radius = Math.random() * 100;

		this.x =
			this.radius + Math.random() * (this.controller.width - this.radius * 2);
		this.y =
			this.radius + Math.random() * (this.controller.height - this.radius * 2);
	}

	update() {
		this.x++;
	}

	draw(ctx) {
		ctx.fillStyle = `hsl(${300},100%,50%)`;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fill();
	}
}

/* const myController = new Controller(myCanvas, ctx);
myController.handleParticle(); */
