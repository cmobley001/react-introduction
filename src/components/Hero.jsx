import LabWeek from "./LabWeek";

function Hero() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-6 gap-y-2 p-6">
        My First React Page
      </h1>
      <LabWeek week="10" title="Learning React Children">
        <p className="mt-2">Github repo:</p>
      </LabWeek>
    </>
  );
}

export default Hero;
