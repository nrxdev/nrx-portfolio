import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:nicolasregenhardt@hotmail.com?subject=${formData.subject}&body=Hola, mi nombre es ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
        Contacto
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Tengo justo lo que necesitas.{" "}
          <span className="underline decoration-[#00cec9]/50">Hablemos.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#00cec9] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+54 342 4790459</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#00cec9] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Santa Fe, Argentina - CP 3000</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#00cec9] h-7 w-7 animate-pulse" />
            <p className="text-2xl">nicolasregenhardt@hotmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
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
