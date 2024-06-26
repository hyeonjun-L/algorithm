console.log(
  solution(
    [1, 0, 1],
    ["iron", "iron", "iron", "iron", "diamond", "diamond", "diamond"]
  )
);

function solution(picks, minerals) {}

function digging(pick, minerals) {
  let fatigue = 0;
  for (let mineral of minerals) {
    if (pick === 0) fatigue++;
    else if (pick === 1) {
      if (mineral === "diamond") {
        fatigue += 5;
      } else {
        fatigue++;
      }
    } else {
      if (mineral === "diamond") {
        fatigue += 25;
      } else if (mineral === "iron") {
        fatigue += 5;
      } else {
        fatigue++;
      }
    }
  }
  return fatigue;
}

//   while (Math.max(...picks) !== 0 && i < minerals.length) {
//     console.log(minerals[i]);
//     i++;
//   }

//   console.log(arr);

// function solution(picks, minerals) {
//   let arr = new Array(Math.ceil(minerals.length / 5) + 1).fill([0, 0, 0]);

//   for (let i = 1; i < arr.length; i++) {
//     let spliceMinerals = minerals.splice(0, 5);

//     arr[i] = arr[i - 1].map((currentFatigue, index) => {
//       if (picks[index] && currentFatigue !== Infinity) {
//         if (index === 0) {
//           return (
//             Math.min(arr[i - 1][1], arr[i - 1][2]) +
//             digging(index, spliceMinerals)
//           );
//         } else if (index === 1) {
//           return (
//             Math.min(arr[i - 1][0], arr[i - 1][2]) +
//             digging(index, spliceMinerals)
//           );
//         } else {
//           return (
//             Math.min(arr[i - 1][0], arr[i - 1][1]) +
//             digging(index, spliceMinerals)
//           );
//         }
//       } else {
//         return Infinity;
//       }
//     });
//     // picks[arr[i].indexOf(Math.min(...arr[i]))] -= 1; // lastindexOf
//   }
//   console.log(arr);

//   return Math.min(...arr[arr.length - 1]);
// }
