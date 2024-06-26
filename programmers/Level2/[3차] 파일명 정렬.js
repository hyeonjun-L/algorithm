console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);

function solution(files) {
  return files.sort((a, b) => {
    const headA = a.match(/[^0-9]+/)[0].toUpperCase(); // ignore upper and lowercase
    const headB = b.match(/[^0-9]+/)[0].toUpperCase(); // ignore upper and lowercase

    if (headA < headB) {
      return -1;
    }
    if (headA > headB) {
      return 1;
    }

    const numberA = Number(a.match(/[0-9]+/)[0]);
    const numberB = Number(b.match(/[0-9]+/)[0]);
    if (numberA < numberB) {
      return -1;
    }
    if (numberA > numberB) {
      return 1;
    }

    return 0;
  });
}
