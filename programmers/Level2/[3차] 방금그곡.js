function parseMelody(melody) {
  const melodyMap = {
    "C#": "H",
    "D#": "I",
    "F#": "J",
    "G#": "K",
    "A#": "L",
    "E#": "F",
    C: "C",
    D: "D",
    E: "E",
    F: "F",
    G: "G",
    A: "A",
    B: "B",
  };

  return melody.replace(
    /C#|D#|F#|G#|A#|E#|C|D|E|F|G|A|B/g,
    (match) => melodyMap[match]
  );
}

function solution(m, musicinfos) {
  const answer = {
    title: "(None)",
    totalTime: 0,
  };
  m = parseMelody(m);

  musicinfos.forEach((musicinfo) => {
    const [musicStart, musicEndTime, title, sheetMusic] = musicinfo.split(",");

    const playTime =
      (new Date(`1970-01-01 ${musicEndTime}`) -
        new Date(`1970-01-01 ${musicStart}`)) /
      60000;

    let fullMelody = parseMelody(sheetMusic);

    const repeatedFullMelody = fullMelody.repeat(
      Math.ceil(playTime / fullMelody.length)
    );
    fullMelody = repeatedFullMelody.slice(0, playTime);

    if (fullMelody.includes(m) && playTime > answer.totalTime) {
      answer.title = title;
      answer.totalTime = playTime;
    }
  });

  return answer.title;
}
