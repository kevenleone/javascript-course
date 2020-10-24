const age = 17;

try {
    if (age <= 18) {
        throw new Error("Menor de idade")
    }
} catch (error) {
    console.log(error.message)
}

console.log("Fim do arquivo")
