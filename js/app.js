'use strict';
function Employee (employeeID, fullName , department ,level,image,salary){
this.employeeID=employeeID;
this.fullName= fullName;
this.department =department;
this.level=level;
this.image=image;
this.salary=salary;
}                                                                                                 

Employee.prototype.calcSallary =function()
{this.salary=0;
   
 
       if(this.level==="Senior")
       {
        this.salary =  getRndInteger(1500,2000);
        
       }
      
   
      
        if(this.level=="Mid-Senior")
        this.salary =  getRndInteger(1000,1500);
    
   

        if(this.level=="Junior")
        this.salary =  getRndInteger(500,1000);
    

}


Employee.prototype.printing =function()
{
    document.write( this.fullName);
    document.write("    ");
    document.write( this.salary);

}
Employee.prototype.netSallary=function()
{ 
    let tax =.0075*this.salary;
   
    this.salary=this.salary-tax;


}

//document.getElementById("ss").innerHTML ="my name";

let e1= new Employee(1000,"Ghazi Samer","Administration","Senior","./assest/logoipsum-logo-36.svg",5);
let e2 = new Employee(1001,"Lana Ali"	,"Finance"	,"Senior","./assest/logoipsum-logo-36.svg",0	);
let e3 = new Employee(1002,"Tamara Ayoub"	,"Marketing"	,"Senior","./assest/logoipsum-logo-36.svg",0	);
let e4 = new Employee(1003,"Safi Walid"	,"Administration"	,"Mid-Senior","./assest/logoipsum-logo-36.svg",0	);
let e5 = new Employee(1004,"Omar Zaid"	,"Development"	,"Senior","./assest/logoipsum-logo-36.svg",0	);
let e6 = new Employee(1005,"Rana Saleh"	,"Development"	,"Junior","./assest/logoipsum-logo-36.svg",0	);
let e7 = new Employee(1006,"Hadi Ahmad"	,"Finance"	,"Mid-Senior","./assest/logoipsum-logo-36.svg",0	);
		
e1.calcSallary();
e1.netSallary();
e1.printing();

e2.calcSallary();
e2.netSallary();
e2.printing();

e3.calcSallary();
e3.netSallary();
e3.printing();


e4.calcSallary();
e4.netSallary();
e4.printing();

e5.calcSallary();
e5.netSallary();
e5.printing();

e6.calcSallary();
e6.netSallary();
e6.printing();

e7.calcSallary();
e7.netSallary();
e7.printing();




//functions
function getRndInteger(min, max) {
    
    return Math.floor(Math.random() * (max - min) ) + min;
  }