class CrewCandidate{
    constructor(name, mass, scores){
        this.name=name;
        this.mass=mass;
        this.scores=scores;
    }
    addScore(score){
        this.scores.push(score);
        return;
    }
    averageScore(){
        let sum=0;
        for (let index = 0; index < this.scores.length; index++) {
            sum+=this.scores[index];    
        }
        let average = Math.round(sum/this.scores.length*10)/10;
        return average;
    }
    status(){
        let average=this.averageScore();
        let output='';
        switch (true) {
            case (average>=90):
                output="Accepted";
                break;
            case (average>=80):
                output="Reserve";
                break;
            case (average>=70):
                output="Probationary"
                break;
            default:
                output="Rejected";
                break;
        }
        return output;
    }
}

// Create objects for the following candidates: 
// Bubba Bear has a mass of 135 kg and test scores of 88, 85, and 90.
let bubbaBear = new CrewCandidate('Bubba', 135, [88, 85, 90]);
//part 1 test
console.log(bubbaBear.name);
console.log(bubbaBear.mass);
console.log(bubbaBear.scores);
// Merry Maltese has a mass of 1.5 kg and test scores of 93, 88, and 97.
let merryMaltese = new CrewCandidate('Merry', 1.5, [93, 88, 97]);
// Glad Gator has a mass of 225 kg and test scores of 75, 78, and 62.
let gladGator = new CrewCandidate('Glad', 225, [75, 78, 62]);

//part 2 test
bubbaBear.addScore(83);

//part 3
//average function test 
console.log(merryMaltese.averageScore());
console.log(gladGator.averageScore());
//determine candidate status test
console.log(merryMaltese.status());
console.log(gladGator.status());

let candidates=[bubbaBear, merryMaltese, gladGator];

for (let index = 0; index < candidates.length; index++) {
    console.log(`${candidates[index].name} earned an average test score of ${candidates[index].averageScore()}% and has a status of ${candidates[index].status()}.`);    
    
}
//part 4
let count = 0;
let isReserve=0;
//increase glad gators status
while (gladGator.status()!="Accepted") {
    if(gladGator.status()=="Reserve"){
        isReserve++;
    }
    if(gladGator.status()=="Reserve"&&isReserve==1){
        console.log(`It took Glad ${count} times to reach reserve status`);
    }
    gladGator.addScore(100);
    console.log(gladGator.averageScore());
    console.log(gladGator.status());
    count++;
} 
console.log(`It took Glad ${count} times to be accepted`);

