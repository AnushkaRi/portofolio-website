import PageTemplate from "../../components/Header/PageTemplate/PageTemplate";
import ToDoPhoto from "../../assets/ToDo/ToDo.png";

function ToDo() {
  return (
    <div>
      <PageTemplate
        title="TO-DO LIST APP"
        imgUrl_1={ToDoPhoto}
        text="Simple To-Do List application for your daily tasks. <br/> Tasks can be added, edited, deleted or crossed if done."
        tech="React and CSS"
        link="https://github.com/AnushkaRi/todo-list-app"
      />
    </div>
  );
}

export default ToDo;
