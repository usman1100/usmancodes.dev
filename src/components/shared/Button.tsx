type Props = {
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...rest }: Props) {
  return (
    <button
      className={`
      px-4 py-3
    bg-purple-500
    hover:bg-purple-700
    hover:translate-y-1
    active:bg-purple-900
    transition-all
    text-white border-black border-r-4 border-b-4
     font-bold
     text-xl
         ${className || ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
