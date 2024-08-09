// Assignment # 38

// ities: Write a function called describe_city() that accepts the name of a city and its country.

const describe_city= (
    city : string,
    country : string = "Pakistan"
)=>{console.log(`${city} is in ${country}`);}

describe_city("Karachi");  //1.

describe_city("Multan");   //2

describe_city("Makka", "Saudi" );  //3