console.log('concatenate string method with function')

// concatenate string method with function


function genarateName(name,age,college){

    // console.log("my name is "+ name +" I am " + age +" old");
    console.log(`my name is ${name} I am ${age} he is a student of ${college}`)
}

genarateName("rizvi",23,"kpi");
genarateName("arko",23);
genarateName("redoy",23);
genarateName("antor",23);
genarateName("asad",23);
genarateName("emon",23);


let myName1 = "Rizvi";

console.log(myName1.concat(" said that he loves programming"));

let a = "the name";
console.log(a.concat(" of my college is kpi"));

// const sport = ["Football", "Tennis", "Cricket", "Golf"];

function sports(a){
    
console.log(a.join());
}
sports(["Football", "Tennis", "Cricket", "Golf"])
