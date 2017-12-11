
charArray = [];

function nameGen() {
  syl1Array = ["Bar","Lay", "Beth", "Bek","Bel", "Bal", "Bes", "Bys","Byr", "Ber", "Besh", "Cyr", "Col", "Der", "Dyr", "Dir", "Dor", "Dol", "Dew", "Des", "Det", "Dek", "Del", "Den", "Dem", "Dek","Ek","Er","Et","El","Ed","Es","Ex","Ew","Fer", "Fir", "Fes", "For", "Fol", "Fel", "Fen","Gir", "Gor", "Gon", "Gow", "Ges", "Gel", "Hyl", "Hyr", "Hel", "Hes", "Jyr", "Jor", "Jeth", "Jaer", "Kir","Kol", "Kyr", "Kin", "Kith", "Lyr", "Lor", "Lil", "Lel", "Lith", "Lis", "Lyn", "Lyl", "Les", "Mel", "Mer", "Mir", "Myr", "Nel", "Nil", "Nis", "Nyr", "Nyl", "Naer", "Nar", "Ner", "Neth", "Nir", "Ryn", "Ryth", "Ran", "Rin", "Ril", "Ris", "Ser", "Sir", "Syr","Syth", "Syl", "Sil", "Sher", "Shes", "Shyr", "Shyl", "Shaer", "Til", "Tyl", "Tyr", "Tor", "Torg", "Vyr", "Vyl", "Vier", "Vir", "Vor", "Vyth", "Val", "Vel", "Vol", "Vith", "Ven", "Wyr", "Wir"];
  syl2Array = ["ran", "car","al", "il","el","as","ter","sen","en","ib","or","en", "is","ol","rol","len","on"]
  surName1Array = ["Light","Iron","Steel","Wood","Leaf","Gold", "Gem", "Dust","Dark","Red","Dawn", "Night","Dusk","Cold","Ice", "Flame", "Wood", "Bright", "Sky","Storm","Hail","Mist","Hawk", "Eagle","Rain", "Willow","Reed", "Ash","Bear", "Dragon",];
  surName2Array = ["blade","sword","glow", "flower", "fire", "eye","soul","run","sun", "blood","star","heart","shadow","strider","wing","cloud","blaze","bow","song","singer",];

  epithArray = ["the Red", "the Brave", "the Good", "the Loud", "the Silent", "the Wise", "the Pale", "the Cursed","the Ugly", "the Beautiful", "the False", "the Wretched", "the Hound", "the Dragon", "the Beast", "the Thief", "the Scrawny", "the Hawk", "the Rat", "the Spider", "the Merciful", "the Lamb", "the Cold", "the Fox", "the Owl", "the Angry", "the Victorious", "the Bear", "the Risen", "the Phoenix", "the Loyal", "the Shield", "the Swift", "the White", "the Grey", "the Dark", "the Shadow", "the Bloody"];

  nameStyleArray = ["Epithet", "Surname"];
  var nameStyleNum = Math.floor(Math.random() * nameStyleArray.length);
  var nameStyle = nameStyleArray[nameStyleNum];

  if (nameStyle === "Surname") {
    var surNameNum1 = Math.floor(Math.random() * surName1Array.length);
    var surNameNum2 = Math.floor(Math.random() * surName2Array.length);
    var surName = surName1Array[surNameNum1] + surName2Array[surNameNum2];
  } else if (nameStyle === "Epithet"){
    epithNum = Math.floor(Math.random() *  epithArray.length);
    var surName = epithArray[epithNum];
  }

  var syl1Num = Math.floor(Math.random() * syl1Array.length);
  var syl2Num = Math.floor(Math.random() * syl2Array.length);
  var firstName = syl1Array[syl1Num] + syl2Array[syl2Num];
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

function jobGen() {
  jobArray = ["Wizard","Cleric", "Knight", "Ranger", "Thief", "Warlock", "Merchant", "Shephard","Blacksmith", "Scribe", "Tailor","Carpenter","Squire","Baker","Watchman","Druid", "Monk","Hunter", "Shaman", "Assasin", "Healer",]
  var jobNum = Math.floor(Math.random() * jobArray.length);
  var job = jobArray[jobNum];
  return job;
}

function Character(name, species, gender, personality, job) {
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.personality = personality;
  this.job = job;
}

function newChar() {
  var newChar1 = new Character (nameGen(),specGen(),genderGen(),personalityGen(), jobGen());
  charArray.push(newChar1);
  $("#characters").append("<div class=\"charbox\">" + "<p><h2>" + newChar1.name + "</h2></p>" + "<p><strong>Species: </strong>" + newChar1.species + "</p>" +"<p><strong>Gender: </strong>" + newChar1.gender + "</p>" +"<p><strong>Personality: </strong>" + newChar1.personality + "</p><p><strong>Job: </strong>" + newChar1.job + "</p>" +"</div>");
}

function relGen() {
  $("#relationships").empty();
  charIndex = parseInt(charArray.length * 0.75);
  for (var index = 0; index < charIndex; index += 1) {
    relArray = ["Friends","Rivals", "Siblings", "Cousins", "Dating", "Married", "Enemies", "Exes", "Partners", "Frienemies","In love",]
    var relNum = Math.floor(Math.random() * relArray.length);
    var relationship = relArray[relNum];
    $("#relationships").append("<div class=\"relbox\">" + "<p>" + relationship + "</p>"+ "</div>");
  }
}

function relGenVert() {
  $("#relationshipsVert").empty();
  charIndex = parseInt(charArray.length - 4);
  console.log(charIndex);
  for (var index = 0; index < charIndex; index += 1) {
    relArray = ["Friends","Rivals", "Siblings", "Cousins", "Dating", "Married", "Enemies", "Exes", "Partners", "Frienemies","In love",]
    var relNum = Math.floor(Math.random() * relArray.length);
    var relationship = relArray[relNum];
    $("#relationshipsVert").append("<div class=\"relboxVert\">" + "<p>" + relationship + "</p>"+ "</div>");
  }
}

$(document).ready(function() {
  $('.add-button').click(function(){
    event.preventDefault();
    // console.log(newChar1);
    newChar();
    // $("#char1").append();
    // $("#char1").append();
    // $("#char1").append();
    // $("#char1").append();

    // console.log(nameGen());
    // console.log(specGen());
    // console.log(genderGen());
    // console.log(personalityGen());
    // console.log(jobGen());
    // console.log("---------");
  });
  $('.rel-button').click(function(){
    event.preventDefault();
    relGen();
    relGenVert();
  });
});
