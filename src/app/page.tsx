import { lusitana } from "@/app/ui/fonts";
import { Button } from "@uxf/ui/button";

export default function Home() {
  return (
    <>
      <div className="h-20">
        <h1 className={`${lusitana.className} text-2xl text-center`}>
          Ski-O Dream Team
        </h1>
      </div>
      <div className="grid place-content-center grow">
        <p>Join the show and rock the snow!</p>
      </div>
    </>
  );
}
