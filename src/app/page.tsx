import Button from "@/components/elements/ReusableElements/button";
import Inicio from "@/components/screens/inicio/Inicio";

export default function Home() {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <Inicio></Inicio>
      <Button value="Comprar" bg="bg-secondary" color="text-white"></Button>
    </div>
  );
}
