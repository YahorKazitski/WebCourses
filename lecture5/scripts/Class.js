class Plant{
    constructor(name,description,species,age,classname){
        this.name = name;
        this.description = description;
        this.species = species;
        this.age = age;
        this.classname = classname;
    }
    getName(){return this.name;}
    getDescription(){return this.description}
    getSpecies(){return this.species}
    getAge(){return this.age}
    getClassname(){return this.classname}
}

class Ferm extends Plant{
    constructor(name,description,species,age,classname,size,application){
        super(name,description,species,age,classname);
        this.size = size;
        this.application = application;
    }
    getSize(){return this.size;}
    getApplication(){return this.application;}    
}

class Factory extends Plant{
    constructor(name,description,species,age,classname,size,biohazardclass){
        super(name,description,species,age,classname);
        this.size = size;
        this.biohazardclass = biohazardclass;
    }
    getSize(){return this.size;}
    getBiohazardClass(){return this.biohazardclass;} 
}



factory = new Factory("Fact","New Factory","N/X(Fact)",10,"ClassNameFact",20,"High");
ferm = new Ferm("Ferm","New Ferm","N/X(Ferm)",20,"ClassNameFerm",40,"Drugs");
defType = "Factory";
document.getElementById('factory_type_value').innerHTML = defType;
document.getElementById('factory_name_value').innerHTML = factory.getName();
document.getElementById('factory_description_value').innerHTML = factory.getDescription();
document.getElementById('factory_species_value').innerHTML = factory.getSpecies();
document.getElementById('factory_age_value').innerHTML = factory.getAge();
document.getElementById('factory_classname_value').innerHTML = factory.getClassname();

function SwitchTo(id){
    switch(id){
        case 1:
            defType = "Factory";
            name = factory.getName();
            description = factory.getDescription();
            species = factory.getSpecies();
            age = factory.getAge();
            classname = factory.getClassname();
            break;
        case 2:
            defType = "Ferm";
            name = ferm.getName();
            description = ferm.getDescription();
            species = ferm.getSpecies();
            age = ferm.getAge();
            classname = ferm.getClassname();
            break;
        default:
    }
    document.getElementById('factory_type_value').innerHTML = defType;
    document.getElementById('factory_name_value').innerHTML = name;
    document.getElementById('factory_description_value').innerHTML = description;
    document.getElementById('factory_species_value').innerHTML = species;
    document.getElementById('factory_age_value').innerHTML = age;
    document.getElementById('factory_classname_value').innerHTML = classname;
}
function ReachURL(){
    fetch("http://" + document.getElementById('inputURL').value)
    //.then(response => response.json())
    .then(function(response){
        if(response.status != 200){
            prompt("Something is wrong");
            console.log("Something is wrong");
            return;
        }
        response.json().then(function(data) {
            console.log(data);
          });
    })
    .catch(function(err) {
        prompt("Something is wrong. So put something else)))");
        console.log('Fetch Error :-S', err);
      });
}