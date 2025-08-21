"use client";
useEffect;
import Goods from "@/Goods";
import { useEffect, useState } from "react";

const Page = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((v) => setMenu((prev) => [...v.recipes]));
  });
  return (
    <div className="gird grid-cols-4">
      {menu.map((v, i) => (
        <Goods key={i} image={v.image} name={v.name} rating={v.rating} />
      ))}
    </div>
  );
};

export default Page;
