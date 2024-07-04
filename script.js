const cards = {
  recommended: [
    {
      title: "HTML full course - Build a Website Tutorial",
      img: "https://picsum.photos/200/300",
      duration: "4h 16 m",
      level: "Beginner",
      stars: 3,
      totalVotes: 1600,
      price: "$550",
      author: "Miston Wilson",
    },
    {
      title: "A complete beginner's guide to JavaScript",
      img: "https://picsum.photos/200/300",
      duration: "3h 16 m",
      level: "Advance",
      stars: 4,
      totalVotes: 7500,
      price: "$550",
      author: "Miston Wilson",
    },
    {
      title: "How to create a complete site in React",
      img: "https://picsum.photos/200/300",
      duration: "3h 16 m",
      level: "Advance",
      stars: 4,
      totalVotes: 7500,
      price: "$550",
      author: "Miston Wilson",
    },
  ],
  mostPopular: [
    {
      title: "HTML full course - Build a Website Tutorial",
      img: "https://picsum.photos/200/300",
      duration: "4h 16 m",
      level: "Beginner",
      stars: 3,
      totalVotes: 1600,
      price: "$550",
      author: "Miston Wilson",
    },
    {
      title: "A complete beginner's guide to JavaScript",
      img: "https://picsum.photos/200/300",
      duration: "3h 16 m",
      level: "Advance",
      stars: 4,
      totalVotes: 7500,
      price: "$550",
      author: "Miston Wilson",
    },
  ],
};

const cardsContainer = document.querySelector("#cardsContainer");
console.log(cardsContainer);

const createCard = (cardData) => {
  const cardWrapper = document.createElement("div");
  cardWrapper.setAttribute("class", "col-12 col-md-4 col-lg-3");

  const cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "card gap-2");

  const cardImg = document.createElement("img");
  cardImg.setAttribute("class", "card-img-top w-100 object-fit-cover h-25");
  cardImg.setAttribute("src", cardData.img);
  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  const cardTitle = document.createElement("h3");
  cardTitle.textContent = cardData.title;
  cardTitle.setAttribute("class", "card-title");
  
  const cardPrice = document.createElement("span");
  cardPrice.textContent = cardData.price;
  
  const cardAuthor = document.createElement("h5");
  cardAuthor.textContent = cardData.author;
  cardBody.append(cardTitle, cardPrice, cardAuthor);
  createDurationAndLevel(cardData.duration, cardData.level, cardBody, cardPrice);
  cardContainer.append(cardImg, cardBody);
  cardWrapper.appendChild(cardContainer);
  cardsContainer.appendChild(cardWrapper);
};

const createDurationAndLevel = (duration, level, cardDivToAppend, elementBefore) => {
  const container = document.createElement("div");
  container.setAttribute("class", "d-flex align-items-center gap-3");
  const durationDiv = document.createElement("div");
  const levelDiv = document.createElement("div");
  durationDiv.setAttribute("class", "d-flex align-items-center gap-1");
  levelDiv.setAttribute("class", "d-flex align-items-center gap-1");
  const durationIcon = document.createElement("ion-icon");
  durationIcon.setAttribute("name", "time-outline");
  const durationSpan = document.createElement("span");
  durationSpan.textContent = duration;
  const levelIcon = document.createElement("ion-icon");
  levelIcon.setAttribute("name", "stats-chart-outline");
  const levelSpan = document.createElement("span");
  levelSpan.textContent = level;
  durationDiv.append(durationIcon, durationSpan);
  levelDiv.append(levelIcon, levelSpan);
  container.append(durationDiv, levelDiv);
  cardDivToAppend.insertBefore(container, elementBefore);
};

cards.recommended.forEach(card =>{
    createCard(card);

})