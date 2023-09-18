const Stdin = () => {
  return (
    <input className="ml-2 w-fit flex-1 border-none bg-transparent outline-none" />
  );
};

export const Terminal = () => {
  return (
    <div className="h-[50vh] w-full bg-black p-5 text-white">
      <div className="flex items-center">
        {">"} <Stdin />
      </div>
    </div>
  );
};
