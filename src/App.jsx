import Button from "./components/Button";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
        <Button className="mt-10" href="#login">something</Button>
      </div>
    </>
  );
};

export default App;
