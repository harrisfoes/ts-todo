type ButtonProps = {
  style?: React.CSSProperties;
  content: string;
  handleOnClick: () => void;
};

function Button({ style, content, handleOnClick }: ButtonProps) {
  return (
    <button
      style={style}
      onClick={handleOnClick}
      className="bg-slate-700 text-slate-100 px-2 py-2 rounded-lg hover:opacity-50 font-bold"
    >
      {content}
    </button>
  );
}

export default Button;
