function getName(event) {
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const Email = document.getElementById("email").value;
  const Birth = document.getElementById("date").value;
  // const Address = document.getElementById("address").value;
  const City = document.getElementById("city").value;

  // console.log(password);

  displayData(name, password, Email, Birth,  City);
  // console.log(document.getElementById("name").value);
  // console.log("hello");
  document.getElementById("name").value = "";
  document.getElementById("password").value = "";
  document.getElementById("email").value = "";
  document.getElementById("date").value = "";
  // document.getElementById("address").value = "";
  document.getElementById("city").value = "";
  event.preventDefault();
}

// function getPassword() {
//   const password = document.getElementById('pass-data').value;
//   displayData(password)
// }

function displayData(name, password, Email, birth, City) {
  const displayName = document.getElementById("head-data");
  displayName.innerText = `Name : ${name}`;

  const displayPassword = document.getElementById("pass-data");
  displayPassword.innerText = `Password : ${password}`;

  const displayEmail = document.getElementById("pass-email");
  displayEmail.innerText = `Email : ${Email}`;

  const displayBirth = document.getElementById("pass-date");
  displayBirth.innerText = `Birth : ${birth}`;

  // const displayAddress = document.getElementById("pass-add");
  // displayAddress.innerText = `Address : ${Address}`;

  const displayCity = document.getElementById("pass-city");
  displayCity.innerText = `City : ${City}`;
}
