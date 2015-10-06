function car(plateNo, model ,color) {
    this.plateNo = plateNo;
    this.model= model;
    this.color = color;
    this.speed = 0;
    
    this.startCar = startCar;
    this.stopCar = stopCar;
    this.accelerate = accelerate;
    this.decelerate = decelerate;
    this.repaint = repaint;
}

function startCar( ) {
    this.speed = 10;
}

function stopCar( ) {
    this.speed = 0;
}

function accelerate(a) {
    this.speed = this.speed + a;
}

function decelerate(a) {
    this.speed = this.speed - a;
}

function repaint(newColor) {
    this.color = newColor;
}