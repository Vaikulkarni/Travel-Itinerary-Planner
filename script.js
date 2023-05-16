let activityIndex = 1;

function addActivity() {
  const activitiesContainer = document.getElementById("activitiesContainer");

  const newActivityItem = document.createElement("div");
  newActivityItem.className = "activity-item";

  const newActivityInput = document.createElement("input");
  newActivityInput.type = "text";
  newActivityInput.className = "activity-input";
  newActivityInput.name = "activity" + activityIndex;
  newActivityInput.placeholder = "Activity " + activityIndex;
  newActivityInput.required = true;

  const newRemoveActivityBtn = document.createElement("button");
  newRemoveActivityBtn.type = "button";
  newRemoveActivityBtn.className = "remove-activity-btn";
  newRemoveActivityBtn.title = "Remove Activity";
  newRemoveActivityBtn.addEventListener("click", function() {
    newActivityItem.remove();
    updateActivityNumbers();
  });

  newActivityItem.appendChild(newActivityInput);
  newActivityItem.appendChild(newRemoveActivityBtn);

  activitiesContainer.appendChild(newActivityItem);

  activityIndex++;
}

function updateActivityNumbers() {
  const activityItems = document.querySelectorAll(".activity-item");

  activityItems.forEach((item, index) => {
    const activityInput = item.querySelector(".activity-input");
    activityInput.name = "activity" + index;
    activityInput.placeholder = "Activity " + (index + 1);
  });
}

document.getElementById("addActivityBtn").addEventListener("click", addActivity);

document.getElementById("itineraryForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const destination = document.getElementById("destination").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  const activityInputs = document.querySelectorAll(".activity-input");

  let activities = "";
  for (let i = 0; i < activityInputs.length; i++) {
    if (activityInputs[i].value !== "") {
      activities += `<li>${activityInputs[i].value}</li>`;
    }
  }

  const itineraryHTML = `
    <h2>Your Travel Itinerary</h2>
    <p><strong>Destination:</strong> ${destination}</p>
    <p><strong>Start Date:</strong> ${startDate}</p>
    <p><strong>End Date:</strong> ${endDate}</p>
    <p><strong>Activities:</strong></p>
    <ul>${activities}</ul>
  `;

  document.getElementById("itinerary").innerHTML = itineraryHTML;
});
