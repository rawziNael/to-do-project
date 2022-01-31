var array = [];

function UserLiving() {
    var userHome = prompt("Do you live in Jordan?");
    userHome.toLowerCase();
    if (userHome === "yes" || userHome === "y") {
        array.push(userHome);
    } else if (userHome === "No" || userHome === "n") {
        array.push(userHome);
    }
    else {
        array.push('invalid');
    }
    return array;
}


function UserStudent() {
    var userStudy = prompt("Are you still studing?");
    userStudy.toLowerCase();
    if (userStudy === "yes" || userStudy === "y") {
        array.push(userStudy);
    } else if (userStudy === "No" || userStudy === "n") {
        array.push(userStudy);
    }
    else {
        array.push('Invalid');
    }
    return array;
}

function UserRelation() {
    var userSingle = prompt("Are you single?");
    userSingle.toLowerCase();
    if (userSingle === "yes" || userSingle === "y") {
        array.push(userSingle);
    } else if (userSingle === "no" || userSingle === "n") {
        array.push(userSingle);
    }
    else {
        array.push('Invalid');
    }
    return array;
}

function printArray(arr) {
    return console.log(arr);
}

UserLiving()
UserStudent();
UserRelation();
printArray(array);
