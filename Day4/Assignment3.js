//create a array of 5 objects(4 properties), print 2 properties from that object 
//using for loop and also using forEach loop.

var Students=[
    {
        name:"sakshi",
        age:21,
        roll_no:100,
        sec:"A"
    },

    {
        name:"pooja",
        age:22,
        roll_no:102,
        sec:"B"
    },

    {
        name:"nisha",
        age:24,
        roll_no:104,
        sec:"C"
    },

    {
        name:"vani",
        age:20,
        roll_no:106,
        sec:"D"
    },

    {
        name:"stuti",
        age:23,
        roll_no:108,
        sec:"E"
    }
]

for(var i=0;i<Students.length;i++)
{
    console.log(Students[i].name,Students[i].age);
}
