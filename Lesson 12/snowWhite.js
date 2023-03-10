function SnowWhite() {
    this.name = "Snow White";
    this.age = 0;
    this.fairness = 0;
    this.grow = function () {
        this.age++;
        this.fairness++
    }
 }
 
 
 function EvilQueen() {
    this.name = "Queen";
    this.age = 22;
    this.fairness = 9;
    this.askMirror = function (mirror) {
        console.log("Mirror on the wall, who is the fairest of them all?")
        console.log(mirror.whoIsTheFairest().name);
    }
    this.grow = function () {
        this.age++;
    }
 }
 
 
 function Mirror() {
    this.chicks = [];
    this.whoIsTheFairest = function () {
        let sorted = this.chicks.sort((a, b) => b.fairness - a.fairness);
        return sorted[0];
    }
 }
 
 
 let sw = new SnowWhite();
 let eq = new EvilQueen();
 let mir = new Mirror();
 mir.chicks = [sw, eq];
 
 
 for (let i = 0; i < 10; i++) {
    sw.grow();
    eq.grow();
    eq.askMirror(mir);
 }
 