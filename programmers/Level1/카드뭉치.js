solution(
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);

function solution(cards1, cards2, goal) {
    let cards1Index = 0;
    let cards2Index = 0;
    let result = "Yes"
    goal.forEach(element => {
        if(cards1[cards1Index] === element){
            cards1Index++;
        }
        else if(cards2[cards2Index] === element){
            cards2Index++;
        }
        else{
            result = "No"
        }
    });
    return result;
}
