import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";

function Page() {
  const location = useLocation();
  const badWord = location.state?.badWord || "Spam!";

  return (
    <div className="min-h-screen w-full bg-zinc-50 px-4 py-2 md:px-8 md:py-4">
      <Header />

      <div className="rounded-lg bg-red-400 p-3">
        <h2 className="text-3xl">Error</h2>
        <p className="text-lg">Your form is flagged for {badWord}.</p>
        <p className="text-lg">
          Try resubmitting the form
          <Link to="/" className="text-blue-600 underline">
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Page;