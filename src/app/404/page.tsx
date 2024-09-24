import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-secondary mb-4 " style={{textShadow:"0px 0px 100px #7828C8"}}>
        Página en desarrollo
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        Esta página está en construcción. Vuelve más tarde para ver las
        novedades.
      </p>
      <Link
        href="/"
        className="text-secondary text-xl  hover:text-secondary/80 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default page;
