// console.log(Math.ceil(Math.random()*6)); dice

let hasBabaDrunkCoffe = Math.random() > 0.5;
let isPlayingSolitare = Math.random() > 0.5;
let bloodPressure = Math.round(Math.random()*200) + 70;
// otivame v NAP
// popadame na diva baba na gisheto za informaciq
// 
if(hasBabaDrunkCoffe) {
    // shte pitame kude e kabineta na Ivan Ivanov
    console.log("Dobur den!");

    if(isPlayingSolitare) {
        console.log("Ne me zanimavai, toq e v otpuska")
    } else if(bloodPressure > 120) {
        console.log("Бягай, че съм вдигнала кръвното и не знам...");
    } else {
        console.log("Ти кьорав ли си? Има го на табелата!");
    }
} else {
    console.log("Tuk ne e informaciq");
}

