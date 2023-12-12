function Fill() {
    console.log("Format fill out")
    var noun = document.getElementById('noun').value;
    console.log(noun)
    var verb = document.getElementById('verb').value;
    console.log(verb)
    var nounitem = document.getElementById('nounitem').value;
    console.log(nounitem)
    var adjective = document.getElementById('adjective').value;
    console.log(adjective)
    var nounplural = document.getElementById('nounplural').value;
    console.log(nounplural)
    var adjectiveone = document.getElementById('adjectiveone').value;
    console.log(adjectiveone)
    var nounplace = document.getElementById('nounplace').value;
    console.log(nounplace)
    var nounfood = document.getElementById('nounfood').value;
    console.log(nounfood)
    var nounitemtwo = document.getElementById('nounitemtwo').value;
    console.log(nounitemtwo)
    var catchphrase = document.getElementById('catchphrase').value;
    console.log(catchphrase)
    var p = document.getElementById('output').innerHTML = "Once upon a time, the Loki’s son Fenrir helped to " + noun + " to make a mischief. They had planned " + verb + " to frighten Jörmungandr. However, He was always in a bad mood. Therefore, he threw " + nounitem + " towards them. From there they learned not to disturb the God of " + adjective + ".  But they wanted to keep up doing mischiefs, so they started attacking to " + nounplural + ". Nevertheless, the misdeeds were over because they have become " + adjectiveone + ". Now, they are great gods praised in " + nounplace + " and people from that country celebrate their day every year by bringing " + nounfood + " and " + nounitemtwo + ". At the end of the ceremony of the gods people always thank you by saying " + catchphrase + "."
    var fun =document.querySelector('input[name="fun"]:checked').value; 
    console.log(fun)
  
}
let time= prompt ('Enter how long can you stay to developt the activity');
 if (time<=10) alert ('Better to try later on!');
 else if (time>=11) alert ('Nice, You can start !</h3>');


