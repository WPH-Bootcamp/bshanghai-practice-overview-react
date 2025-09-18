import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

const todos: Todo[] = [];

function generateUniqueId(): string {
  return Date.now().toString() + Math.random().toString(36).substring(2, 9);
}

function addTodo(): void {
  const text = prompt("Enter new to-do text:").trim();
  if (!text) {
    console.log("To-do text cannot be empty!");
    return;
  }

  const newTodo: Todo = {
    id: generateUniqueId(),
    text: text,
    isCompleted: false,
  };

  todos.push(newTodo);
  console.log(`To-do "${newTodo.text}" added.`);
}

function markTodoCompleted(): void {
  listTodos();
  const input = prompt(
    "Enter the NUMBER of the to-do to mark as completed:"
  ).trim();

  if (!input || isNaN(input) || input < 1 || input > todos.length) {
    console.log("Invalid number. Please enter a valid number from the list.");
    return;
  }

  const todoIndex = input - 1;
  if (todos[todoIndex].isCompleted) {
    console.log(`To-do "${todos[todoIndex].text}" is already completed.`);
  } else {
    todos[todoIndex].isCompleted = true;
    console.log(`To-do "${todos[todoIndex].text}" marked as completed.`);
  }
}

function deleteTodo(): void {
  listTodos();
  const input = prompt("Enter the NUMBER of the to-do to delete:").trim();

  if (!input || isNaN(input) || input < 1 || input > todos.length) {
    console.log("Invalid number. Please enter a valid number from the list.");
    return;
  }

  const todoIndex = input - 1;
  const deletedTodo = todos.splice(todoIndex, 1)[0];
  console.log(`To-do "${deletedTodo.text}" deleted.`);
}

function listTodos(): void {
  console.log("\n--- YOUR TO-DO LIST ---");

  if (todos.length === 0) {
    console.log("No to-dos to display.");
    return;
  }

  todos.forEach((todo, index) => {
    const status = todo.isCompleted ? "[DONE]" : "[ACTIVE]";
    console.log(`${index + 1}. ${status} | ${todo.text}`);
  });
  console.log("-----------------------\n");
}

function runTodoApp(): void {
  let running = true;
  while (running) {
    console.log("\nWelcome to Simple To-Do List!");
    console.log("Commands:");
    console.log("1. add");
    console.log("2. complete");
    console.log("3. delete");
    console.log("4. list");
    console.log("5. exit");
    const command = prompt("Enter command:").toLowerCase().trim();

    switch (command) {
      case "add":
      case "1":
        addTodo();
        break;
      case "complete":
      case "2":
        markTodoCompleted();
        break;
      case "delete":
      case "3":
        deleteTodo();
        break;
      case "list":
      case "4":
        listTodos();
        break;
      case "exit":
      case "5":
        running = false;
        console.log("Exiting To-Do List. Goodbye!");
        break;
      default:
        console.log("Invalid command. Please try again.");
    }
  }
}

if (require.main === module) {
  runTodoApp();
}

module.exports = {
  todos,
  generateUniqueId,
  addTodo,
  markTodoCompleted,
  deleteTodo,
  listTodos,
  runTodoApp,
};
