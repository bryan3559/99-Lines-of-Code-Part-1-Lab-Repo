let friends = ['Tiffany','Joi','Jada','Shelby','Jason'];

for (let i = 0; i < friends.length; i++) {
    let friend = friends[i]; 
    console.log(friend.toUpperCase() + ':' +  "\n\n");
    for (let j = 99; j > 0; j--) {
        let minusOne = j - 1; 
            if (j > 1) {
                console.log(j + " lines of code in the file, " + j + " lines of code; " + friend + " strikes one out, " + "clears it all out, " + j + " lines of code in the file. ")
            } else {
                console.log("1 line of code in the file, 1 line of code; " + friend + " strikes one out, clears it all out , no more lines of code in the file.")
            }
    }
}




        
    

  