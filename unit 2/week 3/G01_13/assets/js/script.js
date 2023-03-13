class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  checkAge(x) {
    if (this.age > x.age) {
      console.log(this.firstName + " è più grande di " + x.firstName);
    } else if (this.age == x.age) {
      console.log(
        this.firstName + " e " + x.firstName + " hanno la stessa età"
      );
    } else {
      console.log(this.firstName + " è più piccolo di " + x.firstName);
    }
  }
}

const utente1 = new User("Mario", "Rossi", 24, "Avola");
const utente2 = new User("Carlo", "drossi", 30, "noto");
const utente3 = new User("matteo", "grossi", 24, "siracusa");

utente1.checkAge(utente2);
utente1.checkAge(utente3);
utente2.checkAge(utente1);
// console.log(utente1);
// console.log(utente2);
// console.log(utente3);

//esercizio 2
class Pets {
  constructor(_petName, _petOwner, _species, _breed) {
    this.petName = _petName;
    this.petOwner = _petOwner;
    this.species = _species;
    this.breed = _breed;
  }
  checkOwner(x) {
    if (x.petOwner == this.petOwner) {
      return true;
    } else {
      return false;
    }
  }
}
const referenceName = document.getElementById("name");
const referenceOwner = document.getElementById("owner");
const referenceSpecies = document.getElementById("species");
const referenceBreed = document.getElementById("breed");
const btnAdd = document.getElementById("add");
const referenceList = document.getElementById("petList");
const petList = [];

const savePet = function () {
  let newPets = new Pets(
    referenceName.value,
    referenceOwner.value,
    referenceSpecies.value,
    referenceBreed.value
  );
  petList.push(newPets);
  renderList();
};
const renderList = function () {
  let listItem = document.createElement("li");
  petList.forEach((content) => {
    listItem.innerText = "";
    listItem.innerText =
      content.petName +
      " " +
      content.petOwner +
      " " +
      content.species +
      " " +
      content.breed;
    referenceList.appendChild(listItem);
  });
};

const result = function () {
  let result = petList[1].checkOwner(petList[0]);
  document.getElementById("text").innerText = result;
};
