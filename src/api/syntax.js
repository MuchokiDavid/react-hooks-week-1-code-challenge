/*
API Details

GET /todos
- Response: { todos: [] }

POST /todos
- Body: { todo: { description: "string", completed: false } }
- Response: { todo: { id: 1, description: "string", completed: false } }

PATCH /todos/:id
- Body: { todo: { completed: true } }
- Response: { todo: { id: 1, description: "string", completed: true } }

DELETE /todos/:id
- Response: NONE (don't try to use `r.json()`)
*/

// // Example GET
// fetch("/todos")
//   .then((r) => r.json())
//   .then(data => console.log(data.todos));

// // Example PATCH
// fetch("/todos/1", {
//     method: "PATCH",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ todo: { completed: true } })
// })
//     .then(r => r.json())
//     .then(data => console.log(data.
