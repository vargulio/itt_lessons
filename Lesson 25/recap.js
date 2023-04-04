/**
 * Andrei - V X V V V X
 * Sasho -  V V V V V X
 * bat Georgi - v X X x v
 * Dian - V X x V x X
 * Tako - V V V V V X
 * Evgeni - V V V V V
 * Stoyan - X X X V v 
 * Marto - V x v V x v
 * Geri - v v V x x x
 * Sasho D. - V x v V v V
 * Nikola - x V V v x X
 * Angelo - x V v V x v
 * Milen - v X x 
 * Pavel - v V v V x x
 * Gabi - V V V X
 * Tina - x x V V v v
 * Alex P. X v v x x V
 * 
 * function f(num) {
 *  
 *      console.log(num + 3);
 * 
 * }
 * 
 * 
 * f("Slavi");
 * 
 * 
 * 
 * 
 * function vzemiToqDamage() {
 *  console.log(this);
 * }
 * 
 * 
 * function ime(a,b, ...rest) {
 *  console.log(a);
 *  cosole.log(b);
 *  log(rest);
 * 
 * }
 * 
 * ime(3,5);
 * 
 * 
 * 
 * setTimeout(function() {console.log(5)},0);
 * console.log(6);
 * 
 * let timerID;
 * 
 * let promise = new Promise((res, rej) => {
 * 
 *      timerID = setTimeout(() => {
 *          res(true);     
 *      }, 2000);
 * 
 * });
 * 
 * promise.then(data=> {
 *      console.log(data);
 * })
 * 
 * clearTimeout(timerID);
 * 
 * 
 * 
 * setTimeout(()=> {
 * 
 *  promise.then( data => {
 *      console.log(data);
 *  });
 * 
 * },3000);
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * let obj = {
 *      name: "Maria",
 *      mother: {
 *          name: "Gadna tushta"
 *      }
 * };
 * 
 * console.log(obj.length);
 * 
 * let benefits = {
 *      
 *      payRent: function(){}
 * }
 * 
 * let mariaWithBenefits = {...obj, ...benefits} 
 * 
 * 
 * 
 * promise.then(data => {
 *  return 'Bahur';
 * })
 * .then(data => {
 *      console.log(data); ??? Bahur
 * })
 * 
 * promise.then(data => {
 * 
 *      return  new Promise((r,rej) => r("Bahur"));
 * }).then(data => {
 * 
 *      console.log(data);??? Bahur
 * })
 * 
 */