var pets = [
  { name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560 },
  { name: "Fluffy", species: "dog", age: 4, adopted: true, adoptedDate: "2023-03-27",adoptionFee: 890 },
  { name: "Daisy", species: "dog", age: 9, adopted: true, adoptedDate: "2021-01-05", adoptionFee: 780 },
  { name: "Coco", species: "rabbit", age: 3, adopted: true, adoptedDate: "2019-01-30", adoptionFee: 615 },
  { name: "Simba", species: "cat", age: 4, adopted: true, adoptedDate: "2019-09-30", adoptionFee: 995 },
  { name: "Oreo", species: "rabbit", age: 4, adopted: false, adoptedDate: "", adoptionFee: 605 },
  { name: "Bella", species: "cat", age: 6, adopted: false, adoptedDate: "", adoptionFee: 810 },
  { name: "Milo", species: "bird", age: 3, adopted: false, adoptedDate: "", adoptionFee: 740 },
  { name: "Buddy", species: "dog", age: 10, adopted: true, adoptedDate: "2021-02-01", adoptionFee: 735 },
  { name: "Pebbles", species: "bird", age: 4, adopted: false, adoptedDate: "", adoptionFee: 505 },
];


class PetHandler{
  
  constructor(pets){
    this.arr = pets;
  }

   findPetsInAgeRange(minAge,maxAge) {
    var array = this.arr.filter(function(element){
      return element.age >= minAge && element.age <= maxAge;
    })
    return array;
  }

  ListAdoptedPetsByDate(){
    return this.arr.filter(element => element.adopted).sort((date1 ,date2) =>  { let date3 = new Date(date1.adoptedDate); let date4 = new Date(date2.adoptedDate); return date4 - date3});
    
  }

  ListPets(...pets){
    const petArray = pets.length > 0 ? pets : this.arr;
    const createPetItem = pet => {
      return `${pet.name} | ${pet.species}  | Age:${pet.age} ${pet.adopted ? `Adopted!`:``} `;
    }
    return petArray.map(createPetItem);

  }

  calculateUniqueAdoptionFee(...petNames){
    const uniqueNames = petNames.filter((name, index, array) => array.indexOf(name) === index);
    const isUniqueName = name => uniqueNames.some(uniqueName => uniqueName === name);
    const uniquePets = this.arr.filter(pet => isUniqueName(pet.name));
  const totalFee = uniquePets.reduce((sum, pet) => sum + pet.adoptionFee, 0);

  return totalFee;
  }
}

Array.prototype.findPetsInAgeRange = function(minAge, maxAge) {
  const petHandler = new PetHandler(this);
  return petHandler.findPetsInAgeRange(minAge, maxAge);
};

Array.prototype.ListAdoptedPetsByDate = function() {
  const petHandler = new PetHandler(this);
  return petHandler.ListAdoptedPetsByDate().ListPets();
};

Array.prototype.ListPets = function() {
  const petHandler = new PetHandler(this);
  return petHandler.ListPets();
};

Array.prototype.calculateUniqueAdoptionFee = function(...petNames) {
  const petHandler = new PetHandler(this);
  return petHandler.calculateUniqueAdoptionFee(...petNames);
};
