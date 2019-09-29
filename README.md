# DSA-BST

### Draw a BST
![Draw_a_BST](draw_BST.png)

### Remove root
![remove_root](draw_BST_removeRoot_update.png)

### create BST and run then compare results to drawing
- insert: first numbered array looks the way I pictured. 2nd string array branched slightly different.
  the duplicates were still inserted but pushed further down the tree in the next appropriate position
  similar to the way an open addressing hashTable works.

- remove: first numbered array looks the way I had drawn. 2nd string array is different b/c of my assumption on     what it would do with the 2nd 'E' character. b/c 'E' was in the right subtree it grabbed that value as the        successor. Other than that it remained the same because it replaced the removed node with a node that had an      identical value.

### What does this program do?
Looks like its returning all values by calling itself recurrsively on left and right only if that child exists