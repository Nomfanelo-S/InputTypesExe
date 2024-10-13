function changeTimezone(event) {
  let parisTime = moment()
    .tz("Europe/Paris")
    .format("dddd, MMMM D, YYYY h:m A");
  let sydneyTime = moment()
    .tz("Australia/Sydney")
    .format("dddd, MMMM D, YYYY h:m A");
  let johannesburgTime = moment()
    .tz("Africa/Johannesburg")
    .format("dddd, MMMM D, YYYY h:m A");
  if (event.target.value === "paris") {
    alert(`It is ${parisTime} in Paris, France`);
  }
  if (event.target.value === "sydney") {
    alert(`It is ${sydneyTime} in Sydney, Australia`);
  }
  if (event.target.value === "johannesburg") {
    alert(`It is ${johannesburgTime} in Johannesburg, South Africa`);
  }
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", changeTimezone);
