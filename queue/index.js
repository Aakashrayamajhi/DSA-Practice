import express from "express"
import Queue from "sky-queue"

const app = express();
app.use(express.json());

const queue = new Queue();


app.post("/enqueue", (req, res) => {
  const data = req.body;

  queue.enqueue(data);

  res.json({
    message: "Data added to queue",
    currentSize: queue.size(),
  });
});


app.get("/dequeue", (req, res) => {
  if (queue.isEmpty()) {
    return res.json({ message: "Queue is empty" });
  }

let items = []
while(queue.isEmpty() === false){
    items.push(queue.dequeue())
}

  res.json({
    message: "Item fetched from queue",
    data: items,
    remaining: queue.size(),
  });
});



app.get("/peek", (req, res) => {
  res.json({
    nextItem: queue.peek(),
    size: queue.size(),
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});