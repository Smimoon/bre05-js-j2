let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];


function countActiveUsers(users) {
    let active = 0;
    for(let user of users) {
        if(user.isActive === true) {
            active = active+1;
        }
    }
    return active;
}

console.log(`We currently have ${ countActiveUsers(users) } active users.`);


function getActiveUsers(users) {
    let activeUsers =[];
    for(let user of users) {
        if(user.isActive === true) {
            activeUsers.push(user);
        }
    }
    return activeUsers;
}

function hasBlueEyes(activeUsers) {
    let blue = 0;
    for (let user of activeUsers) {
        if(user.eyeColor === "blue"){
            blue++;
        }
    }
    return blue;
}
let activeUsers = getActiveUsers(users);

console.log(`Out of our currently ${countActiveUsers(users)} active users, ${hasBlueEyes(activeUsers)} have blue eyes.`);


function getActiveUsersAges(users) {
    let activeUsers = getActiveUsers(users);
    let ages = [];
    for(let user of activeUsers) {
        ages.push(user.age);
    }
    return ages;
}

let ages = getActiveUsersAges(users);

function computeActiveUsersAverageAge(ages) {
     let sum = 0;
     let div = 0;
     for(let age of ages) {
         sum = sum + age;
         div++;
     }
     let average = sum / div;
     return average;
}

console.log(`Out of our currently ${countActiveUsers(users)} active users, the average age is ${computeActiveUsersAverageAge(ages)}.`);


function getMultronUsers(users) {
    let multronUsers = 0;
    for(let user of users) {
        if(user.company === "MULTRON") {
            multronUsers++;
        }
    }
    return multronUsers;
}


function setMultronToCenturia(users) {
    for(let user of users) {
        if (user.company === "MULTRON")
        user.company = "Centuria";
    }
}

console.log(`${getMultronUsers(users)} user companies have been changed from MULTRON to CENTURIA.`);

function getBrownEyedUsers(users) {
    let brownEyes = [];
    for(let user of users) {
        if(user.eyeColor === "brown") {
            brownEyes.push(user);
        }
    }
    return brownEyes;
}

let brownEyes = getBrownEyedUsers(users);

function excludeCenturiaWorkers(users) {
    let brown = 0;
    for (let user of brownEyes) {
        if(user.company === "CENTURIA") {
            brownEyes.pop(user);
        }
    }
    for (let user of brownEyes) {
        brown ++;
    }
    return brown;
}

console.log(`${excludeCenturiaWorkers(users)} users with brown eyes do not work at CENTURIA`);


function getActiveBrownEyedUsers(users) {
    let active = 0;
    for(let user of brownEyes) {
        if(user.isActive === true) {
            active++;
        }
    }
    return active;
}

function getInactiveBrownEyedUsers(users) {
    let inactive = 0;
    for(let user of brownEyes) {
        if(user.isActive === false) {
            inactive++;
        }
    }
    return inactive;
}

function getGreenEyedUsers(users) {
    let greenEyes = [];
    for(let user of users) {
        if(user.eyeColor === "green") {
            greenEyes.push(user);
        }
    }
    return greenEyes;
}

let greenEyes = getGreenEyedUsers(users);

function getActiveGreenEyedUsers(users) {
    let active = 0;
    for(let user of greenEyes) {
        if(user.isActive === true) {
            active++;
        }
    }
    return active;
}

function getInactiveGreenEyedUsers(users) {
    let inactive = 0;
    for(let user of greenEyes) {
        if(user.isActive === false) {
            inactive++;
        }
    }
    return inactive;
}

function getBlueEyedUsers(users) {
    let blueEyes = [];
    for(let user of users) {
        if(user.eyeColor === "blue") {
            blueEyes.push(user);
        }
    }
    return blueEyes;
}

let blueEyes = getBlueEyedUsers(users);

function getActiveBlueEyedUsers(users) {
    let active = 0;
    for(let user of blueEyes) {
        if(user.isActive === true) {
            active++;
        }
    }
    return active;
}

function getInactiveBlueEyedUsers(users) {
    let inactive = 0;
    for(let user of blueEyes) {
        if(user.isActive === false) {
            inactive++;
        }
    }
    return inactive;
}

console.log(`Out of our brown eyed users ${getActiveBrownEyedUsers(users)} are active and ${getInactiveBrownEyedUsers(users)} are inactive`);

console.log(`Out of our green eyed users ${getActiveGreenEyedUsers(users)} are active and ${getInactiveGreenEyedUsers(users)} are inactive`);

console.log(`Out of our blue eyed users ${getActiveBlueEyedUsers(users)} are active and ${getInactiveBlueEyedUsers(users)} are inactive`);