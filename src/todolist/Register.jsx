import Input from "@/todolist/Input";
import Button from "@/todolist/Button";
const Register = (props) => {
  return (
    <>
      <div>
        <Input change={props.change} />
        <Button registration={props.registration} />
      </div>
    </>
  );
};

export default Register;
