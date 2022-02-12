var array = [];

function UserLiving() {
    var userHome = prompt("Do you live in Jordan?");
    let a = userHome.toLowerCase();
    if (a === "yes" || a === "y") {
        array.push(a);
    } else if (a === "no" || a === "n") {
        array.push(a);
    }
    else {
        array.push('invalid');
    }
    return array;
}


function UserStudent() {
    var userStudy = prompt("Are you still studing?");
    let a =userStudy.toLowerCase();
    if (a === "yes" || a === "y") {
        array.push(a);
    } else if (a === "no" || a === "n") {
        array.push(a);
    }
    else {
        array.push('Invalid');
    }
    return array;
}

function UserRelation() {
    var userSingle = prompt("Are you single?");
    let a =userSingle.toLowerCase();
    if (a === "yes" || a === "y") {
        array.push(a);
    } else if (a === "no" || a === "n") {
        array.push(a);
    }
    else {
        array.push('Invalid');
    }
    return array;
}

function printArray(arr) {
    for( let i=0 ; i < arr.length;i++){
        console.log(arr[i]);
    }
}

UserLiving()
UserStudent();
UserRelation();
printArray(array);
