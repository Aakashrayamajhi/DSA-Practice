class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(data) {
    this.items[this.tail] = data;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;

    return item;
  }

  peek() {
    return this.items[this.head];
  }

  isEmpty() {
    return this.tail === this.head;
  }

  size() {
    return this.tail - this.head;
  }
}

export default Queue