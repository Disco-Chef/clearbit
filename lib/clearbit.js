const authorization = "Bearer YOUR_API_KEY_HERE";
// TODO

// Constants we will be using:
const form = document.getElementById("clearbitForm");
const email = document.getElementById("clearbitEmail");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userBio = document.getElementById("userBio");
const userLocation = document.getElementById("userLocation");

// 1. Add listener to the form
form.addEventListener('submit', event => {
  // 2. Prevent default behaviour of the form submission:
  event.preventDefault();
  // 3. Send the form content with an AJAX request to ClearbitAPI
  fetchUserInfo(email.value);
})

const fetchUserInfo = (email) => {
  const url = `https://person.clearbit.com/v1/people/email/${email}`
  fetch(url, { headers: { Authorization: authorization } })
    .then(response => response.json())
    .then((data) => {
      // 4. Display the data returned in our DOM
      setUserInfo(data);
    });
    // you can replace lines 28-31 with only the line below and it still would work:
    // .then(setUserInfo);
}

const setUserInfo = (data) => {
  userName.innerText = data.name.fullName;
  userEmail.innerText = data.email;
  userBio.innerText = data.bio;
  userLocation.innerText = data.location;
};
