var friendsage = [11,12,13,13,23];

friendsage[1] = 67;
var possition = friendsage.indexOf(13);
console.log(friendsage);
friendsage.push(55);
console.log(friendsage);

friendsage.pop();
console.log(friendsage);

friendsage.shift();
console.log(friendsage);

friendsage.unshift(7458734658734634);
console.log(friendsage);

var nam = friendsage.slice(2 ,3);
console.log(nam);