let list = [
    {"id":1,"first_name":"Lenora","last_name":"Skilton","age":71,"gender":"Female","breed":"`⁄€‹›ﬁﬂ‡°·‚—±"},
    {"id":2,"first_name":"Guthrie","last_name":"Moorfield","age":87,"gender":"Male","breed":"-1E02"},
    {"id":3,"first_name":"Sampson","last_name":"Waggett","age":18,"gender":"Male","breed":"Ṱ̺̺̕o͞ ̷i̲̬͇̪͙n̝̗͕v̟̜̘̦͟o̶̙̰̠kè͚̮̺̪̹̱̤ ̖t̝͕̳̣̻̪͞h̼͓̲̦̳̘̲e͇̣̰̦̬͎ ̢̼̻̱̘h͚͎͙̜̣̲ͅi̦̲̣̰̤v̻͍e̺̭̳̪̰-m̢iͅn̖̺̞̲̯̰d̵̼̟͙̩̼̘̳ ̞̥̱̳̭r̛̗̘e͙p͠r̼̞̻̭̗e̺̠̣͟s̘͇̳͍̝͉e͉̥̯̞̲͚̬͜ǹ̬͎͎̟̖͇̤t͍̬̤͓̼̭͘ͅi̪̱n͠g̴͉ ͏͉ͅc̬̟h͡a̫̻̯͘o̫̟̖͍̙̝͉s̗̦̲.̨̹͈̣"},
    {"id":4,"first_name":"Adrea","last_name":"Nortcliffe","age":89,"gender":"Genderqueer","breed":"() { 0; }; touch /tmp/blns.shellshock1.fail;"},
    {"id":5,"first_name":"Ximenez","last_name":"Borrott","age":95,"gender":"Male","breed":"̗̺͖̹̯͓Ṯ̤͍̥͇͈h̲́e͏͓̼̗̙̼̣͔ ͇̜̱̠͓͍ͅN͕͠e̗̱z̘̝̜̺͙p̤̺̹͍̯͚e̠̻̠͜r̨̤͍̺̖͔̖̖d̠̟̭̬̝͟i̦͖̩͓͔̤a̠̗̬͉̙n͚͜ ̻̞̰͚ͅh̵͉i̳̞v̢͇ḙ͎͟-҉̭̩̼͔m̤̭̫i͕͇̝̦n̗͙ḍ̟ ̯̲͕͞ǫ̟̯̰̲͙̻̝f ̪̰̰̗̖̭̘͘c̦͍̲̞͍̩̙ḥ͚a̮͎̟̙͜ơ̩̹͎s̤.̝̝ ҉Z̡̖̜͖̰̣͉̜a͖̰͙̬͡l̲̫̳͍̩g̡̟̼̱͚̞̬ͅo̗͜.̟"},
    {"id":6,"first_name":"Perl","last_name":"Gatecliffe","age":73,"gender":"Female","breed":"-1E+02"},
    {"id":7,"first_name":"Corbin","last_name":"Filoniere","age":38,"gender":"Male","breed":"\"'\"'\"''''\""},
    {"id":8,"first_name":"Serene","last_name":"Esh","age":74,"gender":"Female","breed":"1/0"},
    {"id":9,"first_name":"Veronica","last_name":"Conyers","age":87,"gender":"Female","breed":"\"\""},
    {"id":10,"first_name":"Elwyn","last_name":"Pockey","age":36,"gender":"Male","breed":"‪‪test‪"},
    {"id":11,"first_name":"Pennie","last_name":"Hekkert","age":27,"gender":"Male","breed":"1E+02"},
    {"id":12,"first_name":"Adda","last_name":"Arbuckle","age":28,"gender":"Female","breed":"1"},
    {"id":13,"first_name":"Lucias","last_name":"Gammons","age":91,"gender":"Male","breed":"1.00"},
    {"id":14,"first_name":"Marje","last_name":"Tee","age":29,"gender":"Genderqueer","breed":"˙ɐnbᴉlɐ ɐuƃɐɯ ǝɹolop ʇǝ ǝɹoqɐl ʇn ʇunpᴉpᴉɔuᴉ ɹodɯǝʇ poɯsnᴉǝ op pǝs 'ʇᴉlǝ ƃuᴉɔsᴉdᴉpɐ ɹnʇǝʇɔǝsuoɔ 'ʇǝɯɐ ʇᴉs ɹolop ɯnsdᴉ ɯǝɹo˥"},
    {"id":15,"first_name":"Rollin","last_name":"Try","age":46,"gender":"Male","breed":"0/0"},
    {"id":16,"first_name":"Humbert","last_name":"Marryatt","age":57,"gender":"Male","breed":"ثم نفس سقطت وبالتحديد،, جزيرتي باستخدام أن دنو. إذ هنا؟ الستار وتنصيب كان. أهّل ايطاليا، بريطانيا-فرنسا قد أخذ. سليمان، إتفاقية بين ما, يذكر الحدود أي بعد, معاملة بولندا، الإطلاق عل إيو."},
    {"id":17,"first_name":"Nananne","last_name":"McAloren","age":27,"gender":"Female","breed":"ÅÍÎÏ˝ÓÔÒÚÆ☃"},
    {"id":18,"first_name":"Johannah","last_name":"Nolleth","age":39,"gender":"Female","breed":"社會科學院語學研究所"},
    {"id":19,"first_name":"Moritz","last_name":"Pecey","age":10,"gender":"Male","breed":"部落格"},
    {"id":20,"first_name":"Kimberlyn","last_name":"Brand-Hardy","age":8,"gender":"Female","breed":"⁰⁴⁵"},
    {"id":21,"first_name":"Denny","last_name":"Bredee","age":79,"gender":"Female","breed":"999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"},
    {"id":22,"first_name":"Mortie","last_name":"Callington","age":83,"gender":"Male","breed":"Ω≈ç√∫˜µ≤≥÷"},
    {"id":23,"first_name":"Cindie","last_name":"Pembery","age":27,"gender":"Female","breed":"(╯°□°）╯︵ ┻━┻)  "},
    {"id":24,"first_name":"Anallise","last_name":"Cowling","age":82,"gender":"Female","breed":",。・:*:・゜’( ☻ ω ☻ )。・:*:・゜’"},
    {"id":25,"first_name":"Toma","last_name":"Molden","age":20,"gender":"Female","breed":"(｡◕ ∀ ◕｡)"},
    {"id":26,"first_name":"Adeline","last_name":"Kelson","age":33,"gender":"Non-binary","breed":"1'; DROP TABLE users--"},
    {"id":27,"first_name":"Sigfrid","last_name":"Basilio","age":29,"gender":"Male","breed":"<img src=x onerror=alert('hi') />"},
    {"id":28,"first_name":"Brigg","last_name":"Bunting","age":14,"gender":"Male","breed":"-1/2"},
    {"id":29,"first_name":"Dan","last_name":"Pieroni","age":79,"gender":"Male","breed":"הָיְתָהtestالصفحات التّحول"},
    {"id":30,"first_name":"Melamie","last_name":"Espinha","age":61,"gender":"Female","breed":"パーティーへ行かないか"},
    {"id":31,"first_name":"Gherardo","last_name":"Bagby","age":21,"gender":"Male","breed":"999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"},
    {"id":32,"first_name":"Celka","last_name":"Brundale","age":9,"gender":"Female","breed":" "},
    {"id":33,"first_name":"Myrna","last_name":"Crosier","age":96,"gender":"Female","breed":"😍"},
    {"id":34,"first_name":"Olympia","last_name":"Carlisso","age":45,"gender":"Female","breed":"œ∑´®†¥¨ˆøπ“‘"},
    {"id":35,"first_name":"Nari","last_name":"Comusso","age":31,"gender":"Female","breed":"　"},
    {"id":36,"first_name":"Lyndsie","last_name":"Gaitung","age":89,"gender":"Female","breed":"-1"},
    {"id":37,"first_name":"Emlyn","last_name":"Mulqueeny","age":20,"gender":"Male","breed":"/dev/null; touch /tmp/blns.fail ; echo"},
    {"id":38,"first_name":"Rayshell","last_name":"Fontes","age":31,"gender":"Female","breed":"Z̮̞̠͙͔ͅḀ̗̞͈̻̗Ḷ͙͎̯̹̞͓G̻O̭̗̮"},
    {"id":39,"first_name":"Keen","last_name":"Nerger","age":48,"gender":"Male","breed":"␣"},
    {"id":40,"first_name":"Jerrie","last_name":"Gunner","age":56,"gender":"Male","breed":"1/0"},
    {"id":41,"first_name":"Westleigh","last_name":"Gheeraert","age":90,"gender":"Male","breed":"⁰⁴⁵"},
    {"id":42,"first_name":"Archibald","last_name":"Mehaffey","age":14,"gender":"Male","breed":"✋🏿 💪🏿 👐🏿 🙌🏿 👏🏿 🙏🏿"},
    {"id":43,"first_name":"Noelani","last_name":"Ciotto","age":63,"gender":"Female","breed":"❤️ 💔 💌 💕 💞 💓 💗 💖 💘 💝 💟 💜 💛 💚 💙"},
    {"id":44,"first_name":"Daffy","last_name":"Mateev","age":54,"gender":"Female","breed":",。・:*:・゜’( ☻ ω ☻ )。・:*:・゜’"},
    {"id":45,"first_name":"Michelle","last_name":"Vanyatin","age":54,"gender":"Female","breed":"⁰⁴⁵₀₁₂"},
    {"id":46,"first_name":"Wrennie","last_name":"Pipet","age":93,"gender":"Female","breed":"和製漢語"},
    {"id":47,"first_name":"Ninnette","last_name":"Collinette","age":29,"gender":"Female","breed":"1.00"},
    {"id":48,"first_name":"Theressa","last_name":"Cazalet","age":27,"gender":"Female","breed":"\"\""},
    {"id":49,"first_name":"Deanna","last_name":"Muddle","age":62,"gender":"Female","breed":"-1"},
    {"id":50,"first_name":"Madelle","last_name":"Tighe","age":92,"gender":"Female","breed":"　"}
];


let reducer = (accumulated, element) => {

    if(element.gender === 'Female') {
        accumulated.push(element);
    }

    return accumulated;

}

Array.prototype.nashReduce = function(callback, initialValue) {
    let accumulated = initialValue;
    for(let i =0; i< this.length; i++) {        
        accumulated = callback(accumulated, this[i]);        
    }

    return accumulated;
}



let onlyFemaleCats = list.reduce(reducer,[]);


let anotherList = [];
let samoJenski = list.nashReduce(reducer,[]);

let cuttingBalls = (element) => {
    let obj = {
        ...element,
        gender: "Female"
    }
     
    delete obj.first_name;

    return obj;

    /**
     * {
     *    id: 1,
     *    first_name: "somehting",
     *    last_name: "something else",
     *    gender: "edi kvo si",
     *    ...
     * }
     */
}

let result = list.map(cuttingBalls); 

console.log(result);
