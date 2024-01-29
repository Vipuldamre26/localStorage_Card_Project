
const storedData = localStorage.getItem("userInformation");

if (storedData) {
    const userInfo = JSON.parse(storedData);

    document.querySelector(".fName").textContent = userInfo.firstName;
    document.querySelector(".lName").textContent = userInfo.lastName;
    document.querySelector(".country").textContent = userInfo.country;
    document.querySelector(".pNumber").textContent = userInfo.phoneNumber;
    document.querySelector(".state").textContent = userInfo.state;
    document.querySelector(".city").textContent = userInfo.city;
    document.querySelector(".village").textContent = userInfo.village;
}else{
    storeUserInfo();
}

function storeUserInfo() {
    const firstName = prompt("Enter your First Name:");
    const lastName = prompt("Enter your Last Name:");
    const country = prompt("Enter your Country:");
    const phoneNumber = prompt("Enter your Phone Number:");
    const state = prompt("Enter your State:");
    const city = prompt("Enter your City:");
    const village = prompt("Enter your Village:");

    const userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
    };

    localStorage.setItem("userInformation", JSON.stringify(userInfo));

    document.querySelector(".fName").textContent = userInfo.firstName;
    document.querySelector(".lName").textContent = userInfo.lastName;
    document.querySelector(".country").textContent = userInfo.country;
    document.querySelector(".pNumber").textContent = userInfo.phoneNumber;
    document.querySelector(".state").textContent = userInfo.state;
    document.querySelector(".city").textContent = userInfo.city;
    document.querySelector(".village").textContent = userInfo.village;
}
