let Arrays = [1,2,3,4,5]

function reverso(arraioi){
    
    let novoArray = [];

    for (const a of arraioi) {
        novoArray.push(a);
    }

    console.log(novoArray.reverse())
    
}

reverso(Arrays)