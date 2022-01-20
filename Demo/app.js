var userName = prompt("What's your name?");
var userGender= prompt("What's your gender?");
userGender.toLowerCase();
if(userGender === ("male")){
    true;
}else if(userGender ==="female"){
    true;
}
else{
    alert("Unaccepted, please try again!");
    userGender= prompt("What's your gender?")
    false;
}
var userAge= prompt("What's your age?");
if(userAge>0){
    console.log("Accepted");
}else{
    alert("Unaacepted age!, please put your age correctly!");
};
console.log(userGender);
var message=prompt("Do you want a welcoming message? (yes/no)");
var answer=message.toLowerCase();
console.log("answer" + answer);
if(answer === "yes"){
    console.log("in outer if");
    if(userGender === "male"){
        alert("Welcome Mr. " + userName);
    }else if(userGender === "female"){
        alert("Welcome Ms. " + userName);
    }else{
        alert("Welcome " + userName);
    }
}else{
    alert("No problem");
    false;
}