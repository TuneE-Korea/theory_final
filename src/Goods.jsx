import Image from "next/image";
const Goods = (props) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={props.image}
        alt={null}
        width={100}
        height={100}
        className="w-20 h-20 object-cover"
      ></Image>
      <span>{props.name}</span>
      <span>{props.rating}</span>
    </div>
  );
};

export default Goods;
