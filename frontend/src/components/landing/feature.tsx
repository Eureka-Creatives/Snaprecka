import { FaUsers } from "react-icons/fa";
export default function Feature() {
  return (
    <section className="w-full px-10 py-32 font-dm">
      <div className="flex justify-center items-end flex-col px-5">
        <h1 className="text-6xl font-light">What we made</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-20 mx-auto">
          <div
            className="py-54 px-10 border bg-black"
            style={{
              backgroundImage: "url('src/assets/landing/bg2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          {/* Collaboration Feature */}
          <div className="bg-gray-200 rounded-4xl p-1">
            <div className="py-16 px-10 border rounded-4xl bg-pink-400 text-black flex flex-col items-center">
              <FaUsers size={48} className="mb-6" />
              <h2 className="text-2xl font-semibold mb-4">
                Collaborative Albums
              </h2>
              <p className="text-lg text-center mb-6">
                Create shared albums, comment, and react in real time. Make
                memories together, wherever you are.
              </p>
              <span className="italic text-sm opacity-70">
                “Our trip album was so much fun to build together!”
              </span>
            </div>
          </div>
          <div className="py-48 px-10 border rounded-3xl bg-green-400">
            Feature 3
          </div>
        </div>
      </div>
    </section>
  );
}
