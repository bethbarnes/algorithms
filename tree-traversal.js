// Interviewer Prompt
// Today you will write a series of iterator functions for trees.

// breadthFirst
// depthFirstPreOrder
// (if time allows)

// depthFirstPostOrder
// Each of these function will take a node of the tree and a callback. The function will iterate through the child nodes, calling the callback function on each of them. The difference between them is the order in which they iterate.

//set up

function node(value) {
  return {
    value,
    children: []
  }
}
var a = node('a');
var b = node('b');
var c = node('c');
var d = node('d');
var e = node('e');
var f = node('f');
var g = node('g');
var h = node('h');
var i = node('i');
var j = node('j');
var k = node('k');
var l = node('l');
var m = node('m');

a.children.push(b,c,d);
b.children.push(e);
e.children.push(k,l);
c.children.push(f,g,h);
h.children.push(m);
d.children.push(i,j);

//-----------BRREADTH FIRST TRAVERSAL-----------//

function breadthFirst(startNode){
  let queue = [startNode];
  let currIdx = 0;
  while (currIdx < queue.length){
    //if I wanted to do something to each child, I could pass in a callback and call it here like this:
      // const node = queue.shift();
      // callback(node.value)
    queue = queue.concat(queue[currIdx].children);
    // queue.push(...queue[currIdx].children);
    currIdx++;
  }
  return queue;
}
console.log('breadth first of a', breadthFirst(a));

//TIME: O(N) - N is length number of nodes in tree
//SPACE: O(N)



//-----------DEPTH FIRST PRE ORDER TRAVERSAL-----------//

//if I want to calla  callback on them in depth first order
function depthFirstPreOrder(startNode, callback){
  callback(startNode.value)
  startNode.children.forEach(child => {
    depthFirstPreOrder(child, callback)
  })
}

//if I want to add them to array in Depth First order
function depthFirstPreOrder(startNode, callback){
  let q = [startNode.value]
  startNode.children.forEach(child => {
    q.push(...depthFirstPreOrder(child))
  })
  return q
}

//-----------DEPTH FIRST POST ORDER TRAVERSAL-----------//

//if I want to calla  callback on them in depth first post order
function depthFirstPostOrder(startNode, callback){
  startNode.children.forEach(child => {
    depthFirstPostOrder(child, callback)
  })
  callback(startNode.value)
}

//if I want to add them to array in Depth First Post order
function depthFirstPreOrder(startNode){
  let q = []
  startNode.children.forEach(child => {
    q.push(...depthFirstPreOrder(child))
  })
  q.push(startNode.value)
  return q
}
