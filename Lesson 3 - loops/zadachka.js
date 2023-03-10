


console.log("maika ti prokleta")

for(let floor = 1; floor <=20; floor++) {  
    let busted;
    for(let room = 1; room <= 10; room++) {

        console.log(`   Pochvam da grabq s pulni shepi staq: ${room} na etaj: ${floor}`);

        let areThereCops = Math.random() > 0.5;

        if(areThereCops) {
            busted = Math.random() > 0.4;
            if(busted) {
                console.log("Nie samo si berem!");
                console.log("Dano kiliqta e edinichna!");
                break;
            } else {
                console.log("Produljavam po terlici!");
                continue;
            }
            
        }
    }

    if(busted) {
        console.log("Aide az otivam v zatvora!");
        break;
    }
    
    if(floor==2) {
        continue;
    }
    
    console.log("Grabim si. Etaj: " + floor);
}