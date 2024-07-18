// Define data array
var tabledata = [
    { id: 1, name: "Oli Bob", progress: 12, gender: "male", rating: 1, col: "red", dob: "19/02/1984", car: 1 },
    // ... other data entries ...
  ];
  
  // Initialize table
  var table = new Tabulator("#example-table", {
    // Configuration options go here
    data: tabledata, // Pass the data array
    // ... other options ...
  });
//example usage

const myObj = {
    Name: "John",
    Location: "Unknown",
    Type: "Unknown",
    Status: "Unknown",
    Phone_number: "Unknown",
  };
  
  let myOut = "";
  $.each(myObj, function (myKey, myVal) {
    myOut += myKey.padEnd(20) + " = " + myVal + "\r\n";
  });
  
  console.log(myOut);
//output

Name                 = John
Location             = Unknown
Type                 = Unknown
Status               = Unknown
Phone_number         = Unknown
