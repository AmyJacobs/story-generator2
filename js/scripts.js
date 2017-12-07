


function nameGen() {
  consCapArray = ["B","C","D","F","G","H","Ch","Sh","Ph","J","Jh","K", "L", "M", "N","P","Qu","R", "S", "T", "Th", "V", "W","Z"];
  vowArray = ["a","e","i","o","u","y","au", "ae", "ai", "iu",];
  consArray = ["b","c","d","f","g","h","ch","sh","ph","j","jh","k","l","m","n","p","qu","r","s","t","th","v","w","z"];
  vow2Array = ["a","e","i","o","u","y"];
  surName1Array = ["Light","Iron","Steel","Wood","Leaf","Gold", "Gem", "Dust","Dark","Red","Dawn", "Night","Dusk","Cold","Ice", "Flame"];
  surName2Array = ["blade","sword","glow", "flower", "fire", "eye","soul","run","sun"];

  var firstNameNum1 = Math.floor(Math.random() * consCapArray.length);
  var firstNameNum2 = Math.floor(Math.random() * vowArray.length);
  var firstNameNum3 = Math.floor(Math.random() * consArray.length);
  var firstNameNum4 = Math.floor(Math.random() * vow2Array.length);
  var firstNameNum5 = Math.floor(Math.random() * consArray.length);

  var surNameNum1 = Math.floor(Math.random() * surName1Array.length);
  var surNameNum2 = Math.floor(Math.random() * surName2Array.length);

  var firstName = consCapArray[firstNameNum1] + vowArray[firstNameNum2] + consArray[firstNameNum3] + vow2Array[firstNameNum4] + consArray[firstNameNum5];
  var surName = surName1Array[surNameNum1] + surName2Array[surNameNum2];
  var name = firstName + " " + surName;
  return name;
}

function specGen() {
  specArray = ["Dwarf","Elf","Halfling","Human","Orc","Dark Elf","Half-Elf","Half-Orc", "Gnome"]
  var specNum = Math.floor(Math.random() * specArray.length);
  var species = specArray[specNum];
  return species;
}

function genderGen() {
  genderArray = ["Male", "Male", "Male", "Male",  "Male", "Male", "Female", "Female", "Female", "Female", "Female", "Female",  "Nonbinary",]
  var genderNum = Math.floor(Math.random() * genderArray.length);
  var gender = genderArray[genderNum];
  return gender;
}

function personalityGen() {
  personalityArray = ["Angry","Bitter", "Friendly", "Cheerful", "Optimistic", "Pessimistic", "Shy", "Arrogant", "Smug", "Cold", "Manipulative", "Apathetic", "Energetic", "Brilliant", "Flighty","Depressed","Inquisitive", "Calm", "Caring", "Capable", "Sadistic", "Charismatic","Stoic","Flirty", "Contemplative","Generous", "Gentle", "Honorable","Humble","Idealistic","Loyal","Passionate","Persuasive", "Wise","Witty","Aggressive","Aloof","Blunt", "Abrasive","Calculating", "Cautious", "Cynical","Dogmatic", "Gloomy","Gullible",]
  var personalityNum = Math.floor(Math.random() * personalityArray.length);
  var personality = personalityArray[personalityNum];
  return personality;
}


$(document).ready(function() {
  $('#button1').click(function(){
    event.preventDefault();
    console.log(nameGen());
    console.log(specGen());
    console.log(genderGen());
    console.log(personalityGen());
  });
});
