//დაბეჭდეთ 7 დან 28 მდე  ყოველი მესამე რიცხვი,  16 და 22 გარდა - გამოიყენეთ continue (გამოიყენეთ while)

let i = 7
while (i <= 27) {i = i + 3;

    if (i === 16 || i === 22) {continue
    }
   console.log(i);   
} 

//---------------------------------------------------------------------------------------------------------------------


//1. Დაბეჭდეთ რიცხვები 2 დან 8 მდე

for (let i=2;i<8;i++){console.log(i);}

//2. 5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)

for (let i=5;i<36;i+=4){console.log(i);}

//3. დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი

let a = 1

for (let i = 3; i < 8; i++) { a *= i; }console.log(a);

//4. Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)

let person = {
    firstname: "gio",
    lastname: "jason",
    age: 23
};

console.log(person.firstname + " "+ person.lastname);

//5. დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value

for (let i in person)
{console.log (person[i])    
};

//6. დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი.

let fruits = ["Apple","Banana","Orange"];

for (let i of fruits){console.log(i)};

//7. დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits

fruits.unshift("Grapes");
fruits.push("Pineapples")
console.log(fruits);

//8.დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი

let sum=0

for(let i=1;i<34;i++){sum+=i};
console.log(sum);