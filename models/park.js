const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}


Park.prototype.add = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
}

Park.prototype.remove = function(dinosaur) {
  this.dinosaurs.pop(dinosaur);
}


// Park.prototype.findMostAttractiveDinosaur = function(dinosaur) {
//   for (const dinosaur of this.dinosaurs)
//   {
//     if (dinosaur.findMostAttractiveDinosaur === findMostAttractiveDinosaur)
//     {
//       return dinosaur
//     }
//   }
// }

Park.prototype.findBySpecies = function(species) {
  const dinosaurs = [];
  for (const dinosaur of this.dinosaurs) {
    if (dinosaur.species == species) {
      dinosaurs.push(dinosaur);
    }
  }
  return this.dinosaurs = dinosaurs;
}

Park.prototype.calculateAverageVisitorsPerDay = function() {
  let total = 0;
  for(let dinosaur of this.dinosaurs) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.calculateAverageVisitorsPerYear = function() {
  return 365 * this.guestsAttractedPerDay();
}


module.exports = Park;
