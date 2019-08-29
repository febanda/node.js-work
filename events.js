const events = require("events");
const util = require("util");

const Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

const James = new Person("james");
const Mary = new Person("mary");
const Fred = new Person("fred");

const people = [James, Mary, Fred];

people.forEach(person => {
  person.on("speak", function(mssg) {
    console.log(person.name + " said: " + mssg);
  });
});

James.emit("speak", "hey dudes");
