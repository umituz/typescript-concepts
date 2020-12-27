// function todo(todo: { title: string, text: string }) {
//     console.log(todo.title + " " + todo.text);
// }

interface Todo {
    title: string,
    text: string
}

function todo(todo: Todo) {
    console.log(todo.title + " " + todo.text);
}

let myTodo = {
    title: "Trash",
    text: "Take out trash!"
};

todo(myTodo);
