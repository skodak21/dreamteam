import { getXataClient } from "@/generated/xata";
import { Fragment } from "react";

const xata = getXataClient();

export default async function Prices() {
  const athletes = await xata.db.athletes.getAll();

  return (
    <div className="container">
      <div className="grid grid-cols-3">
        <div>Name</div>
        <div>Nationality</div>
        <div>Price</div>
        {athletes.map((athlete) => (
          <Fragment key={athlete.id}>
            <div>{athlete.Name}</div>
            <div>{athlete.Nationality}</div>
            <div>{athlete.Price}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
