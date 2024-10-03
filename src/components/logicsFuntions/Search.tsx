



export const Search = (e: KeyboardEvent, inputRef: React.RefObject<HTMLInputElement>) => {
  if (e.code === "Enter" && inputRef.current?.value !== "") {
    location.href = `/search?q=${inputRef.current?.value}`;
  }
};
