
const Button = ({ text, onClick }) => {
  return (
    <button 
      className="button-primary"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;