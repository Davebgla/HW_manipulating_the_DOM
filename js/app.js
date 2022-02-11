document.addEventListener("DOMContentLoaded", () => {
  const newPlayerForm = document.querySelector("#new-player-form");
  newPlayerForm.addEventListener("submit", handleNewPlayerFormSubmit);

  const deleteAllButton = document.querySelector("#delete-all");
  deleteAllButton.addEventListener("click", handleDeleteAllClick);
});

const handleNewPlayerFormSubmit = function (event) {
  event.preventDefault();

  const playerListItem = createPlayerListItem(event.target);
  const playerList = document.querySelector("#player-list");
  playerList.appendChild(playerListItem);

  event.target.reset();
};

const createPlayerListItem = function (form) {
  const playerListItem = document.createElement("li");
  playerListItem.classList.add("player-list-item");

  const player = document.createElement("h2");
  player.textContent = form.player.value;
  playerListItem.appendChild(player);

  const team = document.createElement("h3");
  team.textContent = form.team.value;
  playerListItem.appendChild(team);

  const conference = document.createElement("p");
  conference.textContent = form.conference.value;
  playerListItem.appendChild(conference);

  return playerListItem;
};

const handleDeleteAllClick = function (event) {
  const playerList = document.querySelector("#player-list");
  playerList.innerHTML = "";
};
