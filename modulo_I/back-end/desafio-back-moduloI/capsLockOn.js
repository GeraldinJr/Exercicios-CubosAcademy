function processData(input) {
    let min = 0;
    let mai = 0;
    for (letra of input) {
        if (letra === letra.toUpperCase()) {
            mai++;
        }
    }
    if (mai === input.length) {
        console.log(input.toLowerCase());
    }
    else if (input[0] === input[0].toLowerCase() && mai === input.length - 1) {
        const parcOut = input.substr(1).toLowerCase();
        console.log(input[0].toUpperCase() + parcOut);
    }
    else {
        console.log(input);
    }
}