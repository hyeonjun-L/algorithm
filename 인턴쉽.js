solution(
  ["muzi", "ryan", "frodo", "neo"],
  [
    "muzi frodo",
    "muzi frodo",
    "ryan muzi",
    "ryan muzi",
    "ryan muzi",
    "frodo muzi",
    "frodo ryan",
    "neo muzi",
  ]
);

solution(
  ["joy", "brad", "alessandro", "conan", "david"],
  [
    "alessandro brad",
    "alessandro joy",
    "alessandro conan",
    "david alessandro",
    "alessandro david",
  ]
);

solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"]);

function solution(friends, gifts) {
  const friendsMap = new Map();

  for (const friend of friends) {
    friendsMap.set(friend, {
      givens: {},
      received: {},
      giftScore: 0,
      giftsToReceive: 0,
    });
  }

  for (const gift of gifts) {
    const [giver, receiver] = gift.split(" ");
    const giverEntry = friendsMap.get(giver);
    const receiverEntry = friendsMap.get(receiver);

    if (giverEntry) {
      giverEntry.givens[receiver] = (giverEntry.givens[receiver] || 0) + 1;
      giverEntry.giftScore += 1;
    }

    if (receiverEntry) {
      receiverEntry.received[giver] = (receiverEntry.received[giver] || 0) + 1;
      receiverEntry.giftScore -= 1;
    }
  }

  for (const [friend1, friend1Data] of friendsMap.entries()) {
    for (const [friend2, friend2Data] of friendsMap.entries()) {
      if (friend1 === friend2) continue;

      const giftsFromFriend2 = friend1Data.received[friend2] || 0;
      const giftsToFriend2 = friend1Data.givens[friend2] || 0;

      if (
        giftsToFriend2 > giftsFromFriend2 ||
        (giftsToFriend2 === giftsFromFriend2 &&
          friend1Data.giftScore > friend2Data.giftScore)
      ) {
        friend1Data.giftsToReceive += 1;
      }
    }
  }

  let answer = 0;
  for (const friendData of friendsMap.values()) {
    answer = Math.max(answer, friendData.giftsToReceive);
  }

  return answer;
}
