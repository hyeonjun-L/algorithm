function solution(files) {
  return files.sort((a, b) => {
    const headA = a.match(/[^0-9]+/)[0].toUpperCase();
    const headB = b.match(/[^0-9]+/)[0].toUpperCase();

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