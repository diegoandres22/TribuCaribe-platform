import {
  PasswordInput,
  EmailInput,
  ButtonReusable,
  ButtonLoginOrRegister,
} from "@/components/elements";

export const LoginSection = () => {
  return (
    <div className="flex flex-col pt-32 items-center gap-4 bg-white min-h-screen w-screen">
      <ButtonLoginOrRegister />
      <div className="flex flex-col py-14 px-10 justify-center mt-24 w-[30rem] border-2 items-center rounded-lg shadow-2xl shadow-[#b18bf0]">
        <EmailInput />
        <PasswordInput />
        <ButtonReusable
          color="text-white px-20"
          value="Ingresar"
          bg="bg-[#6100ff]"
        />
      </div>
    </div>
  );
};
