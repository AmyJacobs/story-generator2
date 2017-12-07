


function nameGen() {
  syl1Array = ["Bar","Lay", "Beth", "Bek","Bel", "Bal", "Bes", "Bys","Byr", "Ber", "Besh", "Cyr", "Col", "Der", "Dyr", "Dir", "Dor", "Dol", "Dew", "Des", "Det", "Dek", "Del", "Den", "Dem", "Dek","Ek","Er","Et","El","Ed","Es","Ex","Ew","Fer", "Fir", "Fes", "For", "Fol", "Fel", "Fen",];
  syl2Array = ["ran", "car","al", "il","el","as","ter","sen","en","ib","or","en", "is","ol","rol","len","on"]
  surName1Array = ["Light","Iron","Steel","Wood","Leaf","Gold", "Gem", "Dust","Dark","Red","Dawn", "Night","Dusk","Cold","Ice", "Flame"];
  surName2Array = ["blade","sword","glow", "flower", "fire", "eye","soul","run","sun"];

  var syl1Num = Math.floor(Math.random() * syl1Array.length);
  var syl2Num = Math.floor(Math.random() * syl2Array.length);

  var surNameNum1 = Math.floor(Math.random() * surName1Array.length);
  var surNameNum2 = Math.floor(Math.random() * surName2Array.length);

  var firstName = syl1Array[syl1Num] + syl2Array[syl2Num];
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
