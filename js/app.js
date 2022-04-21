'use strict';
let empArr = [];
function Employee(employeeID, fullName, department, level, image, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = salary;
    empArr.push(this);
}

Employee.prototype.calcSallary = function () {
    this.salary = 0;


    if (this.level === "Senior") {
        this.salary = getRndInteger(1500, 2000);

    }



    if (this.level == "Mid-Senior")
        this.salary = getRndInteger(1000, 1500);



    if (this.level == "Junior")
        this.salary = getRndInteger(500, 1000);


}

//render
let header = document.getElementById("header1");
let sec = document.getElementById("sec");
Employee.prototype.printing = function () {

    for (var i = 0; i < empArr.length; i++) {
        var imageEl = new Image(); 
        imageEl.src = empArr[i].image;

       //  document.getElementById('container').appendChild(image);
        // let imageEl = document.createElement("img");
        // imageEl.src = empArr[i].image;
        // console.log(+empArr[i].image);
         sec.appendChild(imageEl);

        let fullName = document.createElement("p");
        fullName.textContent = empArr[i].fullName ;
        sec.appendChild(fullName);


        
        let departmentAndLevel = document.createElement("p");
        departmentAndLevel.textContent = "Department : "+empArr[i].department +"      "+"Level :"+empArr[i].level ;
        sec.appendChild(departmentAndLevel);

        let empID = document.createElement("p");
        empID.textContent = empArr[i].employeeID;
        sec.appendChild(empID);


        // let department = document.getElementById("department");
        // department.textContent = empArr[i].department;
        // sec.appendChild(department);

        
        
        
    }

    // document.write( this.fullName);
    // document.write("    ");
    // document.write( this.salary);

}
Employee.prototype.netSallary = function () {
    let tax = .0075 * this.salary;

    this.salary = this.salary - tax;


}





//functions
function getRndInteger(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
}


let formEl = document.getElementById("formid");
formEl.addEventListener("submit", submition);


function submition(event) {
    event.preventDefault();
    let fullName = event.target.fname.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imgURL = event.target.img1.value;
    console.log(department);
    let newEmp = new Employee(generateID(), fullName, department, level, imgURL, 0);
    newEmp.printing();
    newEmp.calcSallary();
    newEmp.netSallary();

}
function generateID() {
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
}
