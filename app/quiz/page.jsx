"use client";
const Page = () => {
  // 버튼 누르면 숫자 올라가도록
  const num = document.querySelector("button");

  const upNumber = () => {
    return (num.innerHTML += 1);
  };
  return (
    <>
      <button onClick={upNumber}>0</button>
    </>
  );
};

export default Page;
