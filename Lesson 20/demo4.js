let list = [
    {"id":1,address: {city: "Sofia", street: "Bul. Bulgaria 69"}, "first_name":"Lenora","last_name":"Skilton","age":71,"gender":"Female","breed":"`⁄€‹›ﬁﬂ‡°·‚—±"},
    {"id":2,"first_name":"Guthrie","last_name":"Moorfield","age":87,"gender":"Male","breed":"-1E02"},
    {"id":3,"first_name":"Sampson","last_name":"Waggett","age":18,"gender":"Male","breed":"Ṱ̺̺̕o͞ ̷i̲̬͇̪͙n̝̗͕v̟̜̘̦͟o̶̙̰̠kè͚̮̺̪̹̱̤ ̖t̝͕̳̣̻̪͞h̼͓̲̦̳̘̲e͇̣̰̦̬͎ ̢̼̻̱̘h͚͎͙̜̣̲ͅi̦̲̣̰̤v̻͍e̺̭̳̪̰-m̢iͅn̖̺̞̲̯̰d̵̼̟͙̩̼̘̳ ̞̥̱̳̭r̛̗̘e͙p͠r̼̞̻̭̗e̺̠̣͟s̘͇̳͍̝͉e͉̥̯̞̲͚̬͜ǹ̬͎͎̟̖͇̤t͍̬̤͓̼̭͘ͅi̪̱n͠g̴͉ ͏͉ͅc̬̟h͡a̫̻̯͘o̫̟̖͍̙̝͉s̗̦̲.̨̹͈̣"},
    {"id":4,"first_name":"Adrea","last_name":"Nortcliffe","age":89,"gender":"Genderqueer","breed":"() { 0; }; touch /tmp/blns.shellshock1.fail;"},
    
];

let {a,address: { city }, first_name} = list[0];
// destructuring converts a group of variables into multiple variables with separate name

console.log(first_name);
console.log(city);
console.log(a);