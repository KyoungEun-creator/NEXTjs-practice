import { TNameAndAge } from "../../../type";

const Greeting = (props: TNameAndAge) => {
  console.log(props);
  return (
    <h1>
      "Hello, {props.name} - {props.age}"
    </h1>
  );
};
export default Greeting;
