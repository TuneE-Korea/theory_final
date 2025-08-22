"use client";
import Goods from "@/Goods";
import { useEffect, useState } from "react";

const Page = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((v) => setMenu(v.recipes));
  }, []);
  return (
    <div className="grid grid-cols-4">
      {menu.map((v, i) => (
        <Goods key={i} image={v.image} name={v.name} rating={v.rating} />
      ))}
    </div>
  );
};

export default Page;
