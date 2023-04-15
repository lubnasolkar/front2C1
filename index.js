/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here 
    // Print all The Employess Whose Profession is Developer..( Using Map Function )

    arr.map((CurrElem) => {
        if(CurrElem.profession == "developer")
        {
            console.log(CurrElem)
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here 
    // Print all The Employess Whose Profession is Developer..( Using ForEach Function )

    arr.forEach((CurrElem) => {
        if(CurrElem.profession == "developer")
        {
            console.log(CurrElem)
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    // Create New Employee Object And add it into the Current array..

    const NewEmp = { id: 4, name: "susan", age: "20", profession: "intern" }
    arr.push(NewEmp);
    console.log(arr[3]);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
   // Remove Object Where the Employees Profession is admin..

    const answer = arr.map((elem) =>{
        if(elem.profession != "admin")
        {
            return elem;
        }
    })

    answer.forEach((CurrElement) => console.log(CurrElement))
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    // Make Another Array with Onjects and concate into current Array and Console it..
    
    const NewArrayObj = [
        { id:5, name:"jayesh", age:"21",profession:"Frontend developer" },
        { id:6, name:"mohan", age:"22",profession:"Backend developer" },
        { id:7, name:"rakesh", age:"23",profession:"Full Stack eveloper" }
    ]
   const NewCreatedArray =  arr.concat(NewArrayObj);

    NewCreatedArray.forEach((CurrObj) => console.log(CurrObj))
  }