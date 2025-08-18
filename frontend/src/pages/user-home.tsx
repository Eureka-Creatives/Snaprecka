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
    <section className="flex-1 px-10 max-lg:px-5">
      <div className="bg-white p-5 rounded-2xl min-h-[calc(100vh-180px)] flex flex-col gap-5">
        <div className="w-full flex flex-row justify-between items-center mb-5">
          <h3 className="text-[#05004E] text-xl font-semibold">Capsules</h3>
          <div>filter by</div>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-2 gap-4">
          {data.length === 0 ? (
            <div className="flex items-center justify-center col-span-3">
              <p>No data available</p>
            </div>
          ) : (
            data.map((item) => (
              <div
                key={item.id}
                className="h-54 rounded-2xl bg-soft-blue/20 p-4"
              >
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
