const BST = require('./BST')

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
    //console.log(nums.find(6))
    //console.log(str.find('U'))
    return nums
}
const theBST = main()

let leftCount = 0
let rightCount = 0
let count = 0

function height(tree){
    if(!tree){ return }
    if (tree.parent && (tree.parent.left == tree)) { leftCount ++ }
    else { rightCount ++ }
    
    height(tree.left)
    height(tree.right)
    count ++
    const result = leftCount > rightCount ? leftCount : rightCount
    return {height: result, count}
}
console.log(height(theBST))