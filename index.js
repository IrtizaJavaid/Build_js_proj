// var state = {
//     Tasklist : [
//         {
//             imageurl : "",
//             tasktitle : "",
//             taskType : "",
//             taskDesciption : ""
//         }
//     ]
// }
const state = {
  tasklist: [],
};
// dom operations
const taskcontent = document.querySelector(".task_contents");
const taskmodal = document.querySelector(".task_modal_body");
console.log(taskcontent);
console.log(taskmodal);
const htmltaskcontent = ({ id, url, title, type, descrip }) => `
<div class=" col-md-6 col-lg-4 mt-3" id=${id} key= ${id}>
<div class ="card shadow-sm task_cards">
<div class ="card-header d-flex justify-content-end task-card-header">
    <button type = "button" class= "btn btn-outline-info mr-1.5" name="${id}">
    <i class="fa-solid fa-pen"  name="${id}"></i>
    </button>
    <button type = "button" class= "btn btn-outline-warning mr-1.5" name="${id}">
    <i class="fa-sharp fa-solid fa-trash" name="${id}"></i>
    </button>
</div>
<div class ="card-body">
${
  url &&
  `<img width = "100%" src=${url} alt="card image" class="card_img_top" md-3 rounded-lg />`
}
<h4 class="card-title">Card title</h4>
<p class="description trim-3-lines text-muted">${descrip}</p>
<div class="tags text-white d-flex flex-wrap">
<span class="badge bg-primary m-1">${type}</span>
</div>
</div>
<div class="card-footer">
     <button class="btn btn-outline-primary float-right data-bs-toggle="modal" data-bs-target="#showtask">Open Task</button>
</div>
</div>
</div>`;
//modal body on click of open task
const htmlModalcontent = ({ id, url, title, type, descrip }) => {
  const date = new Date(parseInt(id));
  return `
 <div id=${id}>
 ${
   url &&
   `<img width = "100%" src=${url} alt="card image" class="img-fluid place_holder_image mb-3" />`
 }
  <strong class="text-muted text-sm"> Created on : ${date.toDateString()}</strong>
  <h2 class="my=3"> ${title}      </h2>
  <p class="text-muted">${descrip}</p>
  </div>
`;
};
const updatelocalstorage = () => {
  localStorage.setItem("tasky",
  JSON.stringify(
    {tasks: state.tasklist,}
    ));
};
