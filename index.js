const fs = require('fs')

// read mode

// asynchronous process

console.log("Starting")

fs.readFile('./index.txt', (err, data) =>{
    if(err){
        console.log("File is not Found")
    }else{
        console.log(data.toString()) // toString is used for convert binary into string
    }
})

console.log("Finishing")

// syncchronous process

fs.readFileSync('./index.txt', (err, data) =>{
    if(err){
        console.log("File is not Found")
    }else{
        console.log(data.toString()) // toString used for convert binary into string
    }
})



// remove text of that file and write the text

fs.writeFile('./index.txt',"Tayaru likes Durga & Ganesh", (err) =>{
    if(err){
        console.log("Failed to Write")
    }else{
        console.log("Success to Write")
    }
})


// write text of that file

fs.appendFile('./index.txt',"Raju likes Durga & Ganesh", (err) =>{
    if(err){
        console.log("Failed to Write")
    }else{
        console.log("Success to Write")
    }
})