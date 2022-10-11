import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:nicolasregenhardt@hotmail.com?subject=${formData.subject}&body=Hola, mi nombre es ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-screen w-full flex relative flex-col text-center md:text-left max-w-7xl px-10 mx-auto items-center">
      <h3 className="w-full text-center pt-20 mb-4 uppercase tracking-[20px] text-gray-300 text-2xl ml-5">
        Contacto
      </h3>
      <div className="flex w-full flex-col flex-1 items-center justify-start sm:justify-center">
        <div className="flex flex-col self-start mx-auto mb-4">
          <h4 className="text-xl sm:text-xl sm:pt-0 sm:mt-0 font-semibold">
            Tengo justo lo que necesitas.{" "}
          </h4>
          <span className="text-xl sm:text-xl font-semibold text-center underline decoration-[#00cec9]/50">
            Hablemos.
          </span>
        </div>
        <div className="space-y-3 md:space-y-5 mb-4 self-start mx-auto">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#00cec9] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-lg text-center">+54 342 4790459</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#00cec9] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-lg">Santa Fe, Argentina - CP 3000</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#00cec9] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-lg">nicolasregenhardt@hotmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 sm:max-w-none w-fit mx-auto"
        >
          <div className="flex flex-col sm:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              {...register("name")}
              placeholder="Nombre"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Asunto"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Mensaje"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#00cec9] py-5 px-10 rounded-md text-black font-bold"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
