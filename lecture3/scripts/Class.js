function Plant(name,description,species,age,classname){
    this.name = name;
    this.description = description;
    this.species = species;
    this.age = age;
    this.classname = classname;
    this.getName = function(){return this.name}
    this.getDescription = function(){return this.description}
    this.getSpecies = function(){return this.species}
    this.getAge = function(){return this.age}
    this.getClassname = function(){return this.classname}
}

function Ferm(name,description,species,age,classname,size,application){
    this.plant = new Plant(name,description,species,age,classname);
    this.size = size;
    this.application = application;
    this.getName = function(){return this.plant.getName()}
    this.getDescription = function(){return this.plant.getDescription()}
    this.getSpecies = function(){return this.getSpecies()}
    this.getAge = function(){return this.getAge()}
    this.getClassname = function(){return this.getClassname()}
    this.getSize = function(){return this.size}
    this.getApplication = function(){return this.application}
}

function Factory(name,description,species,age,classname,size,biohazardclass){
    this.plant = new Plant(name,description,species,age,classname);
    this.size = size;
    this.biohazardclass = biohazardclass;
    this.getName = function(){return this.plant.getName()}
    this.getDescription = function(){return this.plant.getDescription()}
    this.getSpecies = function(){return this.getSpecies()}
    this.getAge = function(){return this.getAge()}
    this.getClassname = function(){return this.getClassname()}
    this.getSize = function(){return this.size}
    this.getBiohazardClass = function(){return this.biohazardclass}
}



factory = new Factory("Fact","New Factory","N/X",10,"ClassName",20,"High");
ferm = new Ferm("Ferm","New Ferm","N/X",10,"ClassName",20,"Drugs");
Text = "Factory: " + factory.getName() +
        "\nDescription: " + factory.getDescription();

document.getElementById('factory').innerHTML = Text;