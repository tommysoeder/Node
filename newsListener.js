const { EventEmitter } = require("events");

function createNewsFeed() {
  const emitter = new EventEmitter();

  setInterval(() => {
    emitter.emit("newsEvent", "News: A thing happened in a place.");
  }, 1000);

  setInterval(() => {
    emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
  }, 4000);

  setTimeout(() => {
    emitter.emit("error", new Error("News feed connection error"));
  }, 5000);

  return emitter;
}

const newsFeed = createNewsFeed();

newsFeed.on("newsEvent", data => {
  console.log("Received newsEvent:", data);
});

newsFeed.on("breakingNews", data => {
  console.log("Received breakingNews:", data);
});

newsFeed.on("error", error => {
  console.error("Received error:", error.message);
});
