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
];
export default function UserHome() {
  return (
    <section className="flex-1 px-10 max-lg:px-5">
      <div className="grid grid-cols-3 max-md:grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item.id} className="h-54 rounded-2xl bg-soft-blue/20 p-4">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
