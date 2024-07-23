import Input from "./components/html/input";
import Button from "./components/html/Button";

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-2">
          <Input
            type="password"
            placeholder=" Todo List!!!!!"
            onChange={() => {
              console.log("onchange");
            }}
          />
          <Button className="bg-[#4F4F4F]">Add</Button>
          <Button className="bg-[#ED4848]">Cancel</Button>
          <Button className="bg-[#7D48ED]">Success</Button>
        </div>
      </div>
    </>
  );
};
export default App;
