const allusers=[{firstname:"bharath" ,
    gender:"male"
},
{
    firstname:"sresh",
    gender:"female"
},
{
    firstname:"sharan",
    gender:"male"
}]
for(let i=0;i<allusers.length;i++){
    if(allusers[i]["gender"]=="male")
        console.log(allusers[i]["firstname"]);
}