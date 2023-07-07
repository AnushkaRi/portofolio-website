import PageTemplate from "../../components/Header/PageTemplate/PageTemplate";
import ToDoPhoto from "../../assets/ToDo/ToDo.png";

function ToDo() {
  return (
    <div>
      <PageTemplate
        title="TO-DO LIST APP"
        imgUrl_1={ToDoPhoto}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat."
        tech="HTML, CSS and Vanilla JS, "
        link="https://github.com/AnushkaRi/todo-list-app"
      />
    </div>
  );
}

export default ToDo;
