// function solution(keymaps, targets) {
//   const seen = {};
//   return targets.map((target) => {
//     let number = 0;
//     const chars = target.split("");
//     for (let i = 0; i < chars.length; i++) {
//       const char = chars[i];
//       if (seen[char] && seen[char] !== -1) {
//         number += seen[char];
//       } else if (seen[char] === -1) {
//         return -1;
//       } else {
//         let min = Infinity;
//         for (let j = 0; j < keymaps.length; j++) {
//           const index = keymaps[j].indexOf(char);
//           if (index !== -1) {
//             min = Math.min(min, index + 1);
//           }
//         }
//         if (min < Infinity) {
//           seen[char] = min;
//           number += min;
//         } else {
//           seen[char] = -1;
//           return -1;
//         }
//       }
//     }
//     return number;
//   });
// }

// console.log(["hello"] + { hi: 1 });
// const kimchi = {
//   맛있어: true,
// };

// kimchi["맛없어"] = false;

// console.log(kimchi);

console.log("start");
setTimeout(function () {
  console.log("gpgp");
});
console.log("end");
