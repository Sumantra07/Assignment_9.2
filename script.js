/*
 *
 * function to create  custom object using constructor pattern
 * 
 * 
 */


    // creating Aero object , constructor pattern
    var Aero = function(model,SeatingCapacity,maximumSpeed) {
        this.model = model;
        this.SeatingCapacity = SeatingCapacity;
        this.maximumSpeed = maximumSpeed;
    };
        Aero.prototype.printIt = function ()
        {
           var s = "aircraft "+ this.model + "  with seating capacity " + this.SeatingCapacity + " has a maximum speed of " + this.maximumSpeed + " and average speed of " + this.AverageSpeed ;
           return s;
        };

  // populating values as per requirement    
 var aircraft1 = new Aero("Boeing 747",900,"2900m/h");
 var aircraft2 = new Aero("Boeing 777",700,"26500m/s");
 var aircraft3 = new Aero("Airbus A380",950,"30000m/s");
 // printing on console as received
  console.log(aircraft1.printIt());
  console.log(aircraft2.printIt());
  console.log(aircraft3.printIt());
 // creating an array of objects
 var aeroArray = {aircraft1, aircraft2, aircraft3};
 console.log("Making changes.Increasing seating capacity, deleting maxspeed and adding average speed..")
 // loop through each object
 for (var i in aeroArray)
 {
 // increase seating capacity
aeroArray[i].SeatingCapacity = aeroArray[i].SeatingCapacity + 10;
delete  aeroArray[i].maximumSpeed ;
aeroArray[i].AverageSpeed = "600 m/s";
console.log(aeroArray[i].printIt());


 }


 



