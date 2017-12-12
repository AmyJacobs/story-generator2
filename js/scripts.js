charArray = [];

function nameGen() {
  var syl1Array = ["Bar","Lay", "Beth", "Bek","Bel", "Bal", "Bes", "Bys","Byr", "Ber", "Besh", "Cyr", "Col", "Der", "Dyr", "Dir", "Dor", "Dol", "Dew", "Des", "Det", "Dek", "Del", "Den", "Dem", "Dek","Ek","Er","Et","El","Ed","Es","Ex","Ew","Fer", "Fir", "Fes", "For", "Fol", "Fel", "Fen","Gir", "Gor", "Gon", "Gow", "Ges", "Gel", "Hyl", "Hyr", "Hel", "Hes", "Jyr", "Jor", "Jeth", "Jaer", "Kir","Kol", "Kyr", "Kin", "Kith", "Lyr", "Lor", "Lil", "Lel", "Lith", "Lis", "Lyn", "Lyl", "Les", "Mel", "Mer", "Mir", "Myr", "Nel", "Nil", "Nis", "Nyr", "Nyl", "Naer", "Nar", "Ner", "Neth", "Nir", "Ryn", "Ryth", "Ran", "Rin", "Ril", "Ris", "Ser", "Sir", "Syr","Syth", "Syl", "Sil", "Sher", "Shes", "Shyr", "Shyl", "Shaer", "Til", "Tyl", "Tyr", "Tor", "Torg", "Vyr", "Vyl", "Vier", "Vir", "Vor", "Vyth", "Val", "Vel", "Vol", "Vith", "Ven", "Wyr", "Wir"];
  var syl2Array = ["ran", "car","al", "il","el","as","ter","sen","en","ib","or","en", "is","ol","rol","len","on"]
  var surName1Array = ["Light","Iron","Steel","Wood","Leaf","Gold", "Gem", "Dust","Dark","Red","Dawn", "Night","Dusk","Cold","Ice", "Flame", "Wood", "Bright", "Sky","Storm","Hail","Mist","Hawk", "Eagle","Rain", "Willow","Reed", "Ash","Bear", "Dragon",];
  var surName2Array = ["blade","sword","glow", "flower", "fire", "eye","soul","run","sun", "blood","star","heart","shadow","strider","wing","cloud","blaze","bow","song","singer",];

  var epithArray = ["the Red", "the Brave", "the Good", "the Loud", "the Silent", "the Wise", "the Pale", "the Cursed","the Ugly", "the Beautiful", "the False", "the Wretched", "the Hound", "the Dragon", "the Beast", "the Thief", "the Scrawny", "the Hawk", "the Rat", "the Spider", "the Merciful", "the Lamb", "the Cold", "the Fox", "the Owl", "the Angry", "the Victorious", "the Bear", "the Risen", "the Phoenix", "the Loyal", "the Shield", "the Swift", "the White", "the Grey", "the Shadow", "the Bloody"];

  var placeArray1 = ["Red", "Ice", "Green", "New", "High", "White", "Black", "Sky","Cold","Grey","Dark", "Rain", "Mist",];
  placeArray2 = ["castle", "land", "lund", "valley", "town","plain", "wood", ];

  var nameStyleArray = ["Epithet", "Surname", "Placename"];
  var nameStyleNum = Math.floor(Math.random() * nameStyleArray.length);
  var nameStyle = nameStyleArray[nameStyleNum];

  if (nameStyle === "Surname") {
    var surNameNum1 = Math.floor(Math.random() * surName1Array.length);
    var surNameNum2 = Math.floor(Math.random() * surName2Array.length);
    var surName = surName1Array[surNameNum1] + surName2Array[surNameNum2];
  } else if (nameStyle === "Epithet"){
    var epithNum = Math.floor(Math.random() *  epithArray.length);
    var surName = epithArray[epithNum];
  } else if (nameStyle === "Placename"){
    var placeNum1 = Math.floor(Math.random() *  placeArray1.length);
    var placeNum2 = Math.floor(Math.random() *  placeArray2.length);
    var surName = "of " + placeArray1[placeNum1] + placeArray2[placeNum2];
  }

  var syl1Num = Math.floor(Math.random() * syl1Array.length);
  var syl2Num = Math.floor(Math.random() * syl2Array.length);
  var firstName = syl1Array[syl1Num] + syl2Array[syl2Num];
  var name = firstName + " " + surName;
  return name;
}

function specGen() {
  var specArray = ["Dwarf","Elf","Halfling","Human","Orc","Dark Elf","Half-Elf","Half-Orc", "Gnome"]
  var specNum = Math.floor(Math.random() * specArray.length);
  var species = specArray[specNum];
  return species;
}

function eyeGen() {
  var eyeArray = ["Blue","Ice blue","Grey","Brown", "Golden", "Yellow", "Green", "Hazel", "Red"]
  var eyeNum = Math.floor(Math.random() * eyeArray.length);
  var eye = eyeArray[eyeNum];
  return eye;
}

function hairGen() {
  var hairColorArray = ["Black", "Brown","White", "Grey", "Bald", "Shaved", "Dark brown", "Red","Blond","Dirty blond","White-blond",]
  var hairColorNum = Math.floor(Math.random() * hairColorArray.length);
  var hairColor = hairColorArray[hairColorNum];
  var hairStyleArray = ["mohawk","undercut","combover","mullet", "ponytail", "curls", "bowl cut", "braids", "afro", "beehive","bob", "braid", "bun", "dreadlocks", "flattop", "topknot", "ringlets", "updo",]
  var hairStyleNum = Math.floor(Math.random() * hairStyleArray.length);
  var hairStyle = hairStyleArray[hairStyleNum];

  if (hairColor === "Bald" || hairColor === "Shaved") {
    var hair = hairColor;
  } else {
    var hair = hairColor + " " + hairStyle;
  }

  return hair;
}

function bodyGen() {
  var bodyArray = ["Skinny", "Lean", "Muscular", "Fat", "Curvy", "Lanky", "Stocky",]
  var bodyNum = Math.floor(Math.random() * bodyArray.length);
  var body = bodyArray[bodyNum];
  return body;
}

function genderGen() {
  var genderArray = ["Male", "Male", "Male", "Male",  "Male", "Male", "Female", "Female", "Female", "Female", "Female", "Female",  "Nonbinary",]
  var genderNum = Math.floor(Math.random() * genderArray.length);
  var gender = genderArray[genderNum];
  return gender;
}

function personalityGen() {
  var personalityArray = ["Angry","Bitter", "Friendly", "Cheerful", "Optimistic", "Pessimistic", "Shy", "Arrogant", "Smug", "Cold", "Manipulative", "Apathetic", "Energetic", "Brilliant", "Flighty","Depressed","Inquisitive", "Calm", "Caring", "Capable", "Sadistic", "Charismatic","Stoic","Flirty", "Contemplative","Generous", "Gentle", "Honorable","Humble","Idealistic","Loyal","Passionate","Persuasive", "Wise","Witty","Aggressive","Aloof","Blunt", "Abrasive","Calculating", "Cautious", "Cynical","Dogmatic", "Gloomy","Gullible",]
  var personalityNum = Math.floor(Math.random() * personalityArray.length);
  var personality = personalityArray[personalityNum];
  return personality;
}

function jobGen() {
  var jobArray = ["Wizard","Cleric", "Knight", "Ranger", "Thief", "Warlock", "Merchant", "Shepherd","Blacksmith", "Scribe", "Tailor","Carpenter","Squire","Baker","Watchman","Druid", "Monk","Hunter", "Shaman", "Assasin", "Healer",]
  var jobNum = Math.floor(Math.random() * jobArray.length);
  var job = jobArray[jobNum];
  return job;
}

function Character(name, species, gender, personality, job, eye, hair, body) {
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.personality = personality;
  this.job = job;
  this.eye = eye;
  this.hair = hair;
  this.body = body;
}

function newChar() {
  var newChar1 = new Character (nameGen(),specGen(),genderGen(),personalityGen(), jobGen(), eyeGen(), hairGen(), bodyGen());
  charArray.push(newChar1);
  $("#characters").append("<div class=\"charbox\">" + "<p><h2>" + newChar1.name + "</h2></p>" + "<p><strong>Species: </strong>" + newChar1.species + "</p>" +"<p><strong>Gender: </strong>" + newChar1.gender + "</p>" +"<p><strong>Personality: </strong>" + newChar1.personality + "</p><p><strong>Job: </strong>" + newChar1.job + "</p>" + "<p><strong>Eyes: </strong>" + newChar1.eye + "</p>" + "<p><strong>Hair: </strong>" + newChar1.hair + "</p>" + "<p><strong>Body Type: </strong>" + newChar1.body + "</p>" +"</div>");
}

function relGen() {
  $("#relationships-output").empty();
  var charIndex = parseInt(charArray.length * 0.66666666666);
  if (charArray.length%3 === 0) {
    charIndex+=1;
  }
  for (var index = 0; index < charArray.length; index += 1) {
    var relArray = ["hates", "loves", "is friends with","is best friends with", "has a rivalry with", ]
    var firstIndex = index;
    for (var j = 0; j < charArray.length; j += 1) {
      if (j != firstIndex) {
        var charIndex = charArray[firstIndex];
        var char2Index = charArray[j];
        var relNum = Math.floor(Math.random() * relArray.length);
        var relationship = relArray[relNum];
        $("#relationships-output").append(charIndex.name + " " + relationship + " " + char2Index.name + ". ");

        if (j===charArray.length - 1) {
          $("#relationships-output").append("<br><br>")
        }
      }
    }

  }
}

$(document).ready(function() {
  $('.add-button').click(function(){
    event.preventDefault();
    newChar();
  });
  $('.rel-button').click(function(){
    event.preventDefault();
    $("#relationships-output").show();
    relGen();
  });
});
