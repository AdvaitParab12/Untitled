import { TbFlareFilled } from "react-icons/tb";
import Intro from "@/components/Intro";
import { useForm } from "react-hook-form";
import utils from "@/lib/utils.js";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const services = [
    "Website Design",
    "Content",
    "UX Design",
    "Strategy",
    "User Research",
    "Other",
  ];

  return (
    <>
      <Intro />
      <form
        className="flex flex-col gap-1"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        {/* Input */}
        <input
          type="text"
          {...register("fullname", {
            required: "Please enter your name",
          })}
          id="fullname"
          placeholder="Your name"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
        />
        {errors.fullname && (
          <p className="text-red-500">{errors.fullname.message}</p>
        )}
        <input
          type="email"
          {...register("email", {
            required: "Please enter your email",
            pattern: {
              value: /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/,
              message: "Please enter proper gmail",
            },
          })}
          id="email"
          placeholder="your@company.com"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          type="text"
          {...register("message", {
            required: "Please enter your message",
            minLength: {
              value: 10,
              message: "",
            },
          })}
          id="message"
          placeholder="Tell us a bit about your project..."
          className="h-24 border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}

        <p className="my-5 text-zinc-800">How can we help?</p>

        {/* Checkbox */}
        <section className="mb-12 grid grid-cols-2 gap-1 md:max-w-96">
          {services.map((service, idx) => {
            return (
              <label
                key={service + idx}
                className="flex cursor-pointer items-center gap-1"
              >
                <input
                  type="checkbox"
                  {...register("service", { required: "Atleast one" })}
                  value={service}
                  className="size-6"
                />
                
                {service}
              </label>
            );
          })}
          {errors.service && (
                  <p className="text-red-500">{errors.service.message}</p>
                )}
        </section>
        <button
          type="submit"
          className="flex justify-center gap-2 rounded-lg bg-stone-950 p-2 text-white"
        >
          Let's get started
          <TbFlareFilled size={20} className="text-lime-500" />
        </button>
      </form>
    </>
  );
}

export default Form;
