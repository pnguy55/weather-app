let add = (number1, number2, callback) => {
    sum = number1 + number2
    callback(sum)
}

add(100, 2, (sum) => {
    console.log(sum)
})
