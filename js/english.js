$(document).ready(function(){});

var math = new Object();
math.questions = [
    "Pre-K: Identify Shapes: What is this shape?",
    "2nd Grade: Division: 8 / 4 = ",
    "4th Grade: Geometric measurement: A parallelogram has sides that measure 5 inches long.  What is the perimeter?",
    "5th Grade: Word Problem: Alice and Bob went to the restaurant. Alice's meal totaled $12.57 and Bob's was $5.57.  The tax was 5% and they tipped 8%.  How much was the total?"
    ];
math.answers[
    {   "A":"Cube",
        "B":"Sphere",//answer
        "C":"Cone",
        "D":"Cylinder"
    },
    {   "A":0,
        "B":2,//answer
        "C":4,
        "D":6
    },
    {   "A":20,//answer
        "B":25,
        "C":10,
        "D":5
    },
    {   "A":19.59,
        "B":18.70,
        "C":20.57,
        "D":20.72//answer
    }
    ];
    
var science = new Object();
science.questions = [
    "Second Grade: Force, Mass, and Motion: Two identical busses are going the same speed.  Bus A is heavier than Bus B.  Which bus will take longer to stop?",
    "Third Grade: Magnetism: Which object is magnetic?",
    "Fourth Grade: Identify parts of cells: What are the green portions of this plant cell?",
    "Fifth Grade: Choosing Measurement Units: What is the volume of a swimming pool? Choose best guess."
    ];
science.answers = [
    {
        "A":"A",
        "B":"B",
        "C":"Both will take the same amount of time.",
        "D":"None of the above."
    },
    {
        "A":"A",
        "B":"B",
        "C":"Both will take the same amount of time.",
        "D":"None of the above."
    },
    {
        "A":"A",
        "B":"B",
        "C":"Both will take the same amount of time.",
        "D":"None of the above."
    },
    {
        "A":"A",
        "B":"B",
        "C":"Both will take the same amount of time.",
        "D":"None of the above."
    }
    ];
    
var english = new Object();
english.questions = [
    ""
    ];