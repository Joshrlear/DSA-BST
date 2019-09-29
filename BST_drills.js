const BST = require('./BST')
/* const binarySearchTree = new BST

function insertBst(data) {
    // recurssion
    if (data.length) {
        return binarySearchTree.insert(data[0], null) + insertBst(data.slice(1))
    }
    binarySearchTree.remove(3)
    //binarySearchTree.remove('E')
    console.log(binarySearchTree)
    return binarySearchTree
}

function pushVals(info) {
    if (Array.isArray(info) == true) { return insertBst(info.join('').replace(/[^a-zA-Z0-9]+/g,'')) }
    else if (typeof info == "string") { return insertBst(info.replace(/[^a-zA-Z0-9]+/g,'')) }
    else { return 'Invalid input. Only string or arrays'}
} 

pushVals([3,1,4,6,9,2,5,7])
//pushVals('E A S Y Q U E S T I O N')
*/
function main() {
    const nums = new BST
    const str = new BST
    nums.insert(3)
    nums.insert(1)
    nums.insert(4)
    nums.insert(6)
    nums.insert(9)
    nums.insert(2)
    nums.insert(5)
    nums.insert(7)
    nums.remove(3)
    str.insert('E')
    str.insert('A')
    str.insert('S')
    str.insert('Y')
    str.insert('Q')
    str.insert('U')
    str.insert('E')
    str.insert('S')
    str.insert('T')
    str.insert('I')
    str.insert('O')
    str.insert('N')
    str.remove('E')
    //console.log(nums)
    //console.log(str)
    console.log(nums.find(6))
    console.log(str.find('U'))
}
main()