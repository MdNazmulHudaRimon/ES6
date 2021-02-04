const ages = [12,14,16,18,20];
const ages2 = [20,22,24,26];
const ages3 = [50,56,60,65,70];
const allAges = ages.concat(ages2).concat(ages3);//we will use concat when we want to add an array  elements in another way
console.log(allAges);
//this is an another way we can combine all array in one array
const allAges2 = [...ages,...ages2,...ages3];
console.log(allAges2);


//lets try to find out the maximum elements in array
const  takaPoisaa = [1000,650,500,8550];
const maximum = Math.max(...takaPoisaa);
console.log(maximum);
