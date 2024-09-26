import {
  PasswordInput,
  EmailInput,
  ButtonReusable,
  ButtonLoginOrRegister,
  NameInput,
} from "@/components/elements";

export const RegisterSection = () => {
  return (
    <div className="flex flex-col pt-32 items-center gap-4 bg-white min-h-screen w-screen">
      <ButtonLoginOrRegister />
      <div className="flex flex-col mt-24 py-14 px-10 justify-center w-[30rem] border-2 items-center rounded-lg shadow-xl shadow-[#b18bf0]">
        <NameInput />
        <EmailInput />
        <PasswordInput />
        <PasswordInput />
        <ButtonReusable
          color="text-white px-20"
          value="Registrarse"
          bg="bg-[#6100ff]"
        />
      </div>
    </div>
  );
};
