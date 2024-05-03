// services/fugitiveService.js

const cities = [
    { name: "Yapkashnagar", distance: 60 },
    { name: "Lihaspur", distance: 50 },
    { name: "Narmis City", distance: 40 },
    { name: "Shekharvati", distance: 30 },
    { name: "Nuravgram", distance: 20 }
  ];
  
  const vehicles = [
    { type: "EV Bike", range: 60 },
    { type: "EV Car", range: 100 },
    { type: "EV SUV", range: 120 }
  ];
  
  function selectFugitiveCity() {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
  }
    
    function simulateCapture(copCity, copVehicle) {
        console.log(copCity);
        console.log(copVehicle);
        const distanceToCity = cities.find(city => city.name === copCity).distance;
        const vehicle = vehicles.find(v => v.type === copVehicle);
    
        return distanceToCity <= vehicle.range;
    }
  
  module.exports = {
    selectFugitiveCity,
    simulateCapture
  };
  