type Props = {
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...rest }: Props) {
  return (
    <button
      className={`
      border-b-4 border-r-4
    border-black
    bg-purple-500
    px-4
    py-3
    text-xl
    font-bold text-white transition-all hover:translate-y-1
     hover:bg-purple-700
     active:bg-purple-900
         ${className || ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
