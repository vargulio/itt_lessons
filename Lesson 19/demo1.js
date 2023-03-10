var obj = { 
    name: "shoaib",
    func: function() {
        var self = this;
        console.log("outer function:  this.name = " + this.name);
        console.log("outer function:  self.name = " + self.name);
        (function() {
            console.log("inner function:  this.name = " + this.name);
            console.log("inner function:  self.name = " + self.name);
        }());
    }
};
obj.func()
