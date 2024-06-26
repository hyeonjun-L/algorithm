// // function solution(str1, str2) {
// //   let intersection = [];
// //   str1 = str1.toUpperCase();
// //   str2 = str2.toUpperCase();
// //   str1 = [...str1]
// //     .map((x, i) => (x = x + str1[i + 1]))
// //     .filter((x) => /^[A-Z]*$/.test(x));
// //   str2 = [...str2]
// //     .map((x, i) => (x = x + str2[i + 1]))
// //     .filter((x) => /^[A-Z]*$/.test(x));

// //   if (str1.length === 0 && str2.length === 0) return 65536;

// //   str1.map((x, i) => {
// //     if (str2.includes(x)) {
// //       intersection.push(x);
// //       str2[str2.indexOf(x)] = "";
// //       str1[i] = "";
// //     }
// //   });
// //   str1 = str1.filter((x) => x != "");
// //   str2 = str2.filter((x) => x != "");
// //   return Math.floor(
// //     (intersection.length / (intersection.length + str1.length + str2.length)) *
// //       65536
// //   );
// // }

// // console.log(solution("FRANCE", "french"));
// // str1 = str1.toLowerCase();
// // str2 = str2.toLowerCase();
// // str1 = [...str1]
// //   .map((x, i) => (x = x + str1[i + 1]))
// //   .filter((x) => x.length === 2 && !/[^a-z]/g.test(x));
// // str2 = [...str2]
// //   .map((x, i) => (x = x + str2[i + 1]))
// //   .filter((x) => x.length === 2 && !/[^a-z]/g.test(x));

// function solution(k, dungeons) {
//   let answer = -1;

//   const dfs = (k, dungeons, prev) => {

//     for (let i = 0; i < dungeons.length; i++) {
//       const [req, use] = dungeons[i];
//       if (!req || req > k) continue;
//       const copy = [...dungeons].map((v) => [...v]);
//       copy[i] = [null, null];
//       console.log(`k:${k}, i:${i}, prev:${prev}`, copy, answer);
//       dfs(k - use, copy, prev + 1);
//     }
//     return (answer = Math.max(prev, answer));
//   };

//   dfs(k, dungeons, 0);

//   return answer;
// }

// console.log(
//   solution(80, [
//     [80, 20],
//     [50, 40],
//     [30, 10],
//   ])
// );

const getQueryKey = (...[key, params]) => {
  return params ? [key, params] : [key];
};

const test = (...[te, de]) => {
  console.log(te, de);
};

console.log(test("HAERU_PLACES", 10));
