import Input from "./Input";
import Label from "./Label";

const form = ({ type, title, placeholder }) => {
  return (
    <div>
      <Label title={title} />
      <Input placeholder={placeholder} type={type} />
    </div>
  );
};

export default form;
