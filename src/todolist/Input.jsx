const Input = (props) => {
  return (
    <>
      <input
        onChange={props.change}
        className="border-2 border-red-500"
        type="text"
        placeholder="TODO 입력"
      />
    </>
  );
};

export default Input;
