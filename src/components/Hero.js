import Tick from "../icons/Tick";
import SignupForm from "./SignupForm";

const outcomes = [
  "How to build this landing page with Next.js",
  "How to create API endpoint and integrate with ConvertKit API",
  "How to use React Hook Form and TailwindCSS",
];

const Hero = () => {
  return (
    <div className="border border-gray-20 md:flex md:flex-row">
      <div className="bg-gray-100 text-center flex md:w-1/3">
        <img
          className="mx-auto object-contain"
          alt="Next.js 101"
          src="assets/img_nextjs-101-cover.png"
        />
      </div>
      <div className="px-4 py-8 self-center md:w-2/3">
        <h2 className="font-bold text-2xl mb-3">What you'll learn</h2>
        {outcomes && (
          <ul className="mb-6">
            {outcomes.map((outcome) => {
              {
                return (
                  <li key={outcome} className="text-gray-700 mb-2 flex">
                    <span className="self-center mr-2">
                      <Tick className="h-4" />
                    </span>
                    <span className="opacity-75">{outcome}</span>
                  </li>
                );
              }
            })}
          </ul>
        )}
        {/* <ComingSoonBadge /> */}
        <SignupForm title="Leave your email below, to be notified when this course is ready." />
      </div>
    </div>
  );
};

export default Hero;
