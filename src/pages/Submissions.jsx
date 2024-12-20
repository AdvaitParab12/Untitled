import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import utils from "@/lib/utils";

function Submissions() {
  const location = useLocation();
  const name = location.state?.name || "Anonymous";

  return (
    <div className="min-h-screen w-full bg-zinc-50 px-4 py-2 md:px-8 md:py-4">
      <Header />

      <div className="rounded-lg bg-lime-500 p-3">
        <h2 className="text-3xl">Success 🎉</h2>
        <p className="text-lg">
          {name} your form is successfuly submitted. Go to check{" "}
          <a
            className="text-blue-600 underline"
            target="_blank"
            href={utils.entriesUrl}
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Submissions;
