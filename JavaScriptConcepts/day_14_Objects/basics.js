let user={name:"Aparna",
    age:33,
    phone:8123540291
};

console.log(user);
console.log(user.age);
console.log(user["name"]);


//adding or modifying
user.city="Bangalore";
user.age=30;
console.log(user);

//Copying reference
let a={status:"Pass"};
let b=a;
console.log(b.status);
b.status="fail";
console.log(a.status)