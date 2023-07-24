function solution(s) {
  return [
    ...new Set(
      s
        .replace(/{{|}}/g, '')
        .split('},{')
        .map((str) => str.split(',').sort((a, b) => b - a))
        .sort((a, b) => a.length - b.length)
        .join()
        .split(',')
        .map((str) => Number(str)),
    ),
  ];
}