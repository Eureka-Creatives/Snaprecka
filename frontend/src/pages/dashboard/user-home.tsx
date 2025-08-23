import { Button } from "@/components/ui/button";

const data = [
  {
    id: "1",
    title: "Welcome to Your Home",
    description: "This is your personal space to manage your activities.",
  },
  {
    id: "1",
    title: "Welcome to Your Home",
    description: "This is your personal space to manage your activities.",
  },
  {
    id: "1",
    title: "Welcome to Your Home",
    description: "This is your personal space to manage your activities.",
  },
  {
    id: "1",
    title: "Welcome to Your Home",
    description: "This is your personal space to manage your activities.",
  },
  {
    id: "1",
    title: "Welcome to Your Home",
    description: "This is your personal space to manage your activities.",
  },
  {
    id: "1",
    title: "Welcome to Your Home",
    description: "This is your personal space to manage your activities.",
  },
  {
    id: "1",
    title: "Welcome to Your Home",
    description: "This is your personal space to manage your activities.",
  },
  {
    id: "1",
    title: "Welcome to Your Home",
    description: "This is your personal space to manage your activities.",
  },
  {
    id: "1",
    title: "Welcome to Your Home",
    description: "This is your personal space to manage your activities.",
  },
  {
    id: "1",
    title: "Welcome to Your Home",
    description: "This is your personal space to manage your activities.",
  },
  {
    id: "1",
    title: "Welcome to Your Home",
    description: "This is your personal space to manage your activities.",
  },
];
export default function UserHome() {
  return (
    <section className="flex-1 px-10 pb-5 max-h-screen overflow-hidden">
      <div className="bg-white p-8 rounded- h-full">
        <div className="w-full flex flex-row justify-between items-center mb-2">
          <div>
            <h3 className="text-[#05004E] text-2xl font-semibold">Capsules</h3>
            <p className="text-lg font-light mt-2 text-gray-500/70">
              All Capsule
            </p>
          </div>
          <Button variant="ghost" className="border border-gray-500/50">
            Export
          </Button>
        </div>

        <div className="grid grid-cols-3 h-full max-md:grid-cols-2 gap-4 overflow-y-scroll overflow-clip">
          {data.length === 0 ? (
            <div className="flex items-center justify-center col-span-3">
              <p>No data available</p>
            </div>
          ) : (
            data.map((item) => (
              <div
                key={item.id}
                className="h-54 rounded-2xl bg-soft-blue/20 p-4">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
