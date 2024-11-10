export const Search = (
  e: KeyboardEvent | MouseEvent,
  inputRef: React.RefObject<HTMLInputElement>,
  triggerByClick: boolean = false 
) => {
  if ((e instanceof KeyboardEvent && e.code === "Enter") || triggerByClick) {
    if (inputRef.current?.value !== "") {
      location.href = `/search?query=${inputRef.current?.value}`;
    }
  }
};
