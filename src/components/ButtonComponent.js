const ButtonComponent = ({clickCallback}) => {

  const handleOnClick = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    clickCallback(randomNumber);
  }

  return (
    <button onClick={handleOnClick}>Add random number to list</button>
  )
}

export default ButtonComponent;