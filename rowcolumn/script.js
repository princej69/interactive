let activation = {
    0: {
        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0
    }
};
let binaries = [
    "00000000"
]

setInterval(() => {
    activation[0][0] ++

    document.getElementById("preview").innerHTML = activation[0][0].toString() + activation[0][1].toString() + activation[0][2].toString() + activation[0][3].toString() + activation[0][4].toString() + activation[0][5].toString() + activation[0][6].toString() + activation[0][7].toString()
});