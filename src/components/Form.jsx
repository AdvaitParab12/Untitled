import Intro from "@/components/Intro";
import { TbFlareFilled } from "react-icons/tb";

function Form() {
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
      <form className="flex flex-col gap-1">
        {/* Input */}
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Your name"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@company.com"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
          required
        />
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Tell us a bit about your project..."
          className="h-24 border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
          required
        />

        <p className="my-5 text-zinc-800">How can we help?</p>

        {/* Checkbox */}
        <section className="grid grid-cols-2 gap-1 md:max-w-96 mb-12">
          {services.map((service, idx) => {
            return (
              <label key={service + idx} className="flex items-center gap-1">
                <input type="checkbox" name={service} className="size-6 border shadow-black checked:accent-lime-400" />
                {service}
              </label>
            );
          })}
        </section>
        <button
          type="submit"
          className="flex justify-center gap-2 rounded-lg bg-stone-950 p-3 text-white"
        >
          Let's get started <TbFlareFilled className="text-lime-500" />
        </button>
      </form>
    </>
  );
}

export default Form;
