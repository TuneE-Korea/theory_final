const Button = (props) => {
  return (
    <>
      <button onClick={props.registration} className="border-2 border-blue-500">
        등록하기
      </button>
    </>
  );
};

export default Button;
