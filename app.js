// const jsonData = {
//     "url": "https://www.example.com/my-really-long-link-that-I-need-to-shorten/84378949",
//     "domain": "tinyurl.com",
//     "alias": "hitherebfnd2024",
//     "description": "string"
// };

// // API endpoint URL
// const apiUrl = 'https://api.tinyurl.com/create';
// const apiToken = "6QEb6WFDYvh3KII4T1zHjt4ZE9xuBn2B9agseVfHRwTwmRjGDlziTJRemxR8"

// // Make a POST request with JSON data
// fetch(apiUrl, {
// method: 'POST',
// headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${apiToken}`
// },
// body: JSON.stringify(jsonData)
// })
// .then(response => response.json()) // Parse the JSON response
// .then(data => {
//     console.log(data.errors)
//     console.log(data.data.tiny_url)
// })
// .catch(error => {
//     console.error('Error sending the request:', error);
// });

alert(window.location.href.split("/")[window.location.href.split("/").length - 1])