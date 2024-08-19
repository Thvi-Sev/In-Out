
var ID=document.getElementById('id');
var Name=document.getElementById('name');
var Gender=document.getElementById('gender');
var Score1=document.getElementById('s1');
var Score2=document.getElementById('s2');
var Score3=document.getElementById('s3');
var Score4=document.getElementById('s4');
function Total()
{
    (Score1=="")? Score1=0 :s1;
    (Score2=="")? Score1=0 :s2;
    (Score3=="")? Score1=0 :s3;
    (Score4=="")? Score1=0 :s4;

    let total=Number(Score1.value)+Number(Score2.value)+Number(Score3.value)+Number(Score4.value);
    return total;
}
function Average()
{
    let average=Total()/4;
    return average;
}
function Grade()
{
    let grade=Average();
    if(grade>=90 && grade<=100)
    {
        grade='A';
    }
    else if(grade>=80 && grade<=90)
    {
        grade='B';
    }
    else if(grade>=70 && grade<=80)
    {
        grade='C';
    }
    else if(grade>=60 && grade<=70)
    {
        grade='D';
    }
    else if(grade>=50 && grade<=60)
    {
        grade='E';
    }
    else{
        grade='F';
    }
    return grade;
}
function Output()
{
    document.getElementById("outid").value=ID.value;
    document.getElementById("outname").value=Name.value;
    document.getElementById("outgender").value=Gender.value;
    document.getElementById("total").value=Total();
    document.getElementById("avg").value=Average();
    document.getElementById("grade").value=Grade();
}