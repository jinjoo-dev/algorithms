/**
 *  PROGRAMMERS SCHOOL
 *  https://school.programmers.co.kr/learn/courses/30/lessons/42892
 */

function insertNode(parent, child) {
  // x 좌표로 좌우 판단
  if (child.x < parent.x) {
    // 왼쪽으로
    if (parent.left === null) {
      parent.left = child;
    } else {
      insertNode(parent.left, child);
    }
  } else {
    // 오른쪽으로
    if (parent.right === null) {
      parent.right = child;
    } else {
      insertNode(parent.right, child);
    }
  }
}

function createTree(nodeInfo) {
  const tree = nodeInfo
    .map((node, index) => ({
      no: index + 1,
      x: node[0],
      y: node[1],
      left: null,
      right: null,
    }))
    .sort((a, b) => {
      if (a.y != b.y) return b.y - a.y;
      return a.x - b.x;
    });

  for (let i = 1; i < tree.length; i += 1) {
    insertNode(tree[0], tree[i]);
  }

  return tree;
}

function preOrder(node, result = []) {
  if (!node) return result;

  result.push(node.no); // 1. 나를 먼저
  preOrder(node.left, result); // 2. 왼쪽 방문
  preOrder(node.right, result); // 3. 오른쪽 방문

  return result;
}

function postOrder(node, result = []) {
  if (!node) return result;

  postOrder(node.left, result); // 1. 왼쪽 먼저
  postOrder(node.right, result); // 2. 오른쪽 다음
  result.push(node.no); // 3. 나를 마지막에

  return result;
}

function solution(nodeinfo) {
  const tree = createTree(nodeinfo);

  const preOrdered = preOrder(tree[0]);
  const postOrdered = postOrder(tree[0]);
  return [preOrdered, postOrdered];
}
