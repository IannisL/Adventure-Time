class Adventurer {
    constructor(username, health, inventory, Companion, type) {
        this.username = username
        this.health = health
        this.inventory = inventory
        this.companion = companion
        this.type = type
        this.Friend = Friend
    }

}
const Adventurer1 = {
    username: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        username: "Leo",
        type: "Cat",
        Friend: {
            username: "Frank",
            type: "Flea",
        },
     }, roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.username} rolled a ${result}.`)
    },
};
Adventurer1.roll();

///// part 2 ///////////////
class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
      this.companion = companion;
      this.companion.Companion = companion.Companion;
      this.type = type;
    }
  }
  
  const robin = new Character("Robin");
  robin.inventory = ["sword", "potion", "artifact"];
  robin.companion = new Character("Leo");
  robin.companion.type = "Cat";
  robin.companion.companion = new Character("Frank");
  robin.companion.companion.type = "Flea";
  robin.companion.companion.inventory = ["small hat", "sunglasses"];
console.log( new character)  

///// part 3 ///////////////
class Hero extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }









