
type ButtonProps = {
  style?: React.CSSProperties;
  content: string
  handleOnClick: () => void
}

function Button({
  style,
  content,
  handleOnClick
}: ButtonProps) {
  
  return <button style={style} onClick={handleOnClick} className="bg-slate-700 text-white px-2 py-2 rounded-lg hover:opacity-50">{content}</button>;
}

export default Button;
