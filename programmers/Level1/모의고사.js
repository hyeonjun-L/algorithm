function solution(answers) {
    const student1 = [1,2,3,4,5]            //1번 학생 배열
    const student2 = [2,1,2,3,2,4,2,5]      //2번 학생 배열
    const student3 = [3,3,1,1,2,2,4,4,5,5]  //3번 학생 배열
    let student = [0,0,0]                   // 채점 배열
    let answer = []                         // 등수 배열

    student[0] = answers.filter((x,i) => student1[i % 5] == answers[i]).length
    student[1] = answers.filter((x,i) => student2[i % 8] == answers[i]).length
    student[2] = answers.filter((x,i) => student3[i % 10] == answers[i]).length 

    const max = Math.max(...student)

    student.forEach((v,i) => {
        if(max === v)
            answer.push(i+1)
    })

    return answer


}