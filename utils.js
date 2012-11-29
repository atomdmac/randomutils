Math.prototype.randomInt = function (min, max) {
    return Math.round(Math.random() * min + (max - min));
};

Array.prototype.random = function () {
    this[Math.randomInt(0, this.length-1)];
}