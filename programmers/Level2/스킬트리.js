console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));

function solution(skill, skill_trees) {
  let skills = skill.split("");
  let skillObj = {};
  for (let skill of skills) {
    skillObj[skill] = 1;
  }

  return skill_trees.reduce((acc, skillTree) => {
    let copySkills = [...skills];
    for (let skill of skillTree.split("")) {
      if (skill === copySkills[0]) {
        copySkills.shift();
      } else if (skillObj[skill]) {
        return acc;
      }
    }
    return (acc += 1);
  }, 0);
}
