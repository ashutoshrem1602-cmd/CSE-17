<<<<<<< HEAD
function CalculateResult()
{
    let n = document.getElementById("Subjects").value;
    let total=0;
    for(let i=1;i<=n;i++)
    {
        let Marks = parseFloat(prompt("Enter Marks For Subjects"));
        total = total + Marks;
    }
    let Average = total / n;
    let Grade;
    let Result;
    if (Average >=95)
    {
        Grade = "A+";
    }
    else if (Average >= 85)
    {
        Grade = "A"; 
    }
    else if (Average >=75)
    {
        Grade = "B";
    }
    else if (Average >=65)
    {
        Grade = "C";
    }
    else
    {
        Grade = "D";
    }
    if (Average >=40)
    {
        Result = "Pass";
    }
    else
    {
        Result = "Fail";
    }
    document.getElementById("Result").innerHTML =
    "Total Marks: " + total + "<br>" +
    "Average Marks: " + Average.toFixed(2) + "<br>" +
    "Grade: " + Grade + "<br>" +
    "Result: " + Result;
=======
function CalculateResult()
{
    let n = document.getElementById("Subjects").value;
    let total=0;
    for(let i=1;i<=n;i++)
    {
        let Marks = parseFloat(prompt("Enter Marks For Subjects"));
        total = total + Marks;
    }
    let Average = total / n;
    let Grade;
    let Result;
    if (Average >=95)
    {
        Grade = "A+";
    }
    else if (Average >= 85)
    {
        Grade = "A"; 
    }
    else if (Average >=75)
    {
        Grade = "B";
    }
    else if (Average >=65)
    {
        Grade = "C";
    }
    else
    {
        Grade = "D";
    }
    if (Average >=40)
    {
        Result = "Pass";
    }
    else
    {
        Result = "Fail";
    }
    document.getElementById("Result").innerHTML =
    "Total Marks: " + total + "<br>" +
    "Average Marks: " + Average.toFixed(2) + "<br>" +
    "Grade: " + Grade + "<br>" +
    "Result: " + Result;
>>>>>>> ceb3004cb81a084a0175a2fe84a8cd1c94f95ce2
}