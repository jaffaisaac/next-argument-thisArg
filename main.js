function readyToVote(age){
    return age >= this.agedVoting;
}
function foo(){
    this.agedVoting =18;
    const result = [10,15,20,50].find(readyToVote,this);
    console.log(result)
}
foo() //20