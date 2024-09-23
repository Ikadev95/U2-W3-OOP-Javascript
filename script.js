class User {
    constructor (_firstName, _lastName, _age, _location){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
        this.older = function (user2){
            if (this.age > user2.age){
                return this.firstName + " è più vecchio di " + user2.firstName
            }
            else return user2.firstName + " è più vecchio di " + this.firstName
        }
    }
}

const user1 = new User('Mario', 'Rossi', 35, 'Pavia');
console.log(user1);

const user2 = new User ('Paolo', 'Bianchi', 69, 'Torino');
console.log(user2.older(user1));

class Pet {
    constructor (_petName, _ownerName, _species, _breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
        this.samePetOwner = function (pet2){
            if (this.ownerName === pet2.ownerName){
                return this.petName + " ha lo stesso padrone di " + user2.petName
            }
            return this.petName + " e " + user2.petName + " hanno padroni diversi "
        }
    }
}

const pets = [];
const form = document.getElementById('form1')

form.addEventListener("submit", function(e){
    e.preventDefault();
    let pName = document.getElementById('petName');
    let oName = document.getElementById('ownerName');
    let species = document.getElementById('species');
    let breed = document.getElementById('breed');
    let petCont = document.getElementById('petsContainer');

    const pet = new Pet (pName.value, oName.value ,species.value ,breed.value);

    if ( !petCont.firstElementChild){
        const list = document.createElement('ul');
        petCont.appendChild(list);
        const listItem = document.createElement('li');
        list.appendChild(listItem);
        listItem.innerText = `${pName.value} ${oName.value} ${species.value} ${breed.value}`
    }

    form.reset();
    pets.push(pet);
    console.log(pets);
});

