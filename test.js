// Example of testing the REST API in server.js using axios

const axios = require('axios');

// We'll need to use axios inside an async function if we want to use await
async function test() {
  // we can use try-catch to handle any errors
  try {


    const property1 = {
      address: "property1",
      postal_code: "property1",
      city: "property1",
      community: "property1",
      province: "property1",
      price: 1,
      bedrooms: 1,
      bathrooms: 1,
      img: "property1.jpeg",
      description:"property1"
    };
   
    const property2 = {
      address: "property2",
      postal_code: "property2",
      city: "property2",
      community: "property2",
      province: "property2",
      price: 2,
      bedrooms: 2,
      bathrooms: 2,
      img: "property2.jpeg",
      description:"property2"
    };

    const property3 = {
      address: "property3",
      postal_code: "property3",
      city: "property3",
      community: "property3",
      province: "property3",
      price: 3,
      bedrooms: 3,
      bathrooms: 3,
      img: "property3.jpeg",
      description:"property3"
    };

    // Try a couple inserts
    //insert 1
    const response1a = await axios.post("http://localhost:3000/api/", property1);

    // Output the response from the API
    console.log(response1a.data);

    // Try a couple inserts
    //insert 2
    const response1b = await axios.post("http://localhost:3000/api/", property2);

    // Output the response from the API
    console.log(response1b.data);

    // Try a update
    const response1c = await axios.put("http://localhost:3000/api/1", property3);

    // Output the response from the API
    console.log(response1c.data);

    // Try some deletes
    //delete 1
    const response2a = await axios.delete("http://localhost:3000/api/2");

    // Output the response from the API
    console.log(response2a.data);

    // Try some deletes
    //delete 1
    const response2b = await axios.delete("http://localhost:3000/api/3");

    // Output the response from the API
    console.log(response2b.data);

    // make a request to the API to fetch all items
    const response3 = await axios.get('http://localhost:3000/api');

    // Output the response from the API
    console.log(response3.data);

  } catch (error) {
    console.error(error);
  }
}

// call our test function
test();
