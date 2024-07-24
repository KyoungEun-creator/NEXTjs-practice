import Button from "./components/html/Button";
import Checkbox from "./components/html/Checkbox";
import Input from "./components/html/Input";

export default function App() {
  return (
    <div className="item-middle">
      <div className="flex flex-col gap-4">
        <Input type="text" placeholder="Enter your name" />
        <Button className="bg-[#4b4b4b]">Add</Button>
        <Button className="bg-[#ED4848]">Cancel</Button>
        <Button className="bg-[#7D48ED]">Success</Button>
        <Checkbox checked={true}>
          I agree with <span className="font-bold">terms and policies.</span>
        </Checkbox>
      </div>
    </div>
  );
}
