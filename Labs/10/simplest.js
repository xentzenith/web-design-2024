var gradingScale = [
    { grade: 'A+', min: 90, max: 100, message: 'Congratulations, outstanding achievement!' },
    { grade: 'A', min: 85, max: 89, message: 'Excellent work, keep it up!' },
    { grade: 'A-', min: 80, max: 84, message: 'Great job, continue striving for excellence!' },
    { grade: 'B+', min: 77, max: 79, message: 'Well done, keep pushing yourself!' },
    { grade: 'B', min: 73, max: 76, message: 'Good work, aim even higher next time!' },
    { grade: 'B-', min: 70, max: 72, message: 'Solid effort, keep improving!' },
    { grade: 'C+', min: 67, max: 69, message: 'You\'re progressing, keep up the good work!' },
    { grade: 'C', min: 63, max: 66, message: 'Not bad, but there\'s room for improvement.' },
    { grade: 'C-', min: 60, max: 62, message: 'Passing, but strive for better next time.' },
    { grade: 'D+', min: 57, max: 59, message: 'You passed, but you can do better!' },
    { grade: 'D', min: 53, max: 56, message: 'You passed, but more effort is needed next time.' },
    { grade: 'D-', min: 50, max: 52, message: 'You barely passed, aim higher next time.' },
    { grade: 'F', min: 0, max: 49, message: 'Unfortunately, you did not meet expectations. Seek improvement.' }
]

var st_name = prompt('Enter the student name: ')

let score_saver = [];

while(true){
    let getPrompt = prompt('Enter your score: (c to exit)')

    if(getPrompt === null) break;
    if(getPrompt == 'c') break;


    try{
        getPrompt = parseFloat(getPrompt)
        if(getPrompt<0 || getPrompt>100 || isNaN(getPrompt)) throw new Error('this is error trigger')
    }catch{
        alert('Please enter valid number betweeen the range of 0 and 100')
        continue;
    }

    score_saver = [...score_saver, getPrompt]
}

if(score_saver == []) alert(' USer didnt\'t add any value.');
else{
    var totalGrade = 0;
    for(i of score_saver) {
        console.log(i, totalGrade)
        totalGrade += i
    }
    totalGrade = totalGrade / score_saver.length
    for(obj of gradingScale){
        if(totalGrade>=obj.min && totalGrade <= obj.max)alert('Your letter score is: '+ obj.grade + '\n' + st_name + ' ' + obj.message + '\nYour GPA is: ' + totalGrade)
    }
}
