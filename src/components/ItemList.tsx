import type { HTMLAttributes } from "react";
import ItemCard from "./ItemCard";
import { useDataContext } from "../contexts/DataContextProvider";

type TypeItemCardProps = HTMLAttributes<HTMLDivElement>;

export default function ItemList(props: TypeItemCardProps) {
    const { products } = useDataContext();
  return (
    <div {...props}>
      {products.map((item) => (
        <ItemCard {...item} key={item.name} />
      ))}
    </div>
  );
}
