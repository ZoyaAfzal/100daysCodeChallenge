//Question 41: Magicians: Display magician names from an array.

let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

show_magicians(magicians);

