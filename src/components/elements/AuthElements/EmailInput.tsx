import { Input } from "@nextui-org/react";
export const EmailInput = () => {
  return (
    <Input
      type="email"
      label="Email"
      variant="bordered"
      placeholder="example@gmail.com"
      className="max-w-xs mb-4"
    />
  );
};
