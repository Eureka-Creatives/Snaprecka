export default function CallToAction() {
  return (
    <section className="w-full px-10 py-20 border font-dm">
      <div className="flex justify-start items-center flex-col px-5">
        <h1 className="text-6xl font-medium">Why choose us</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 pt-20 mx-auto">
          <div className="py-48 px-32 border rounded-3xl bg-black"></div>
          <div className="py-48 px-32 border rounded-3xl bg-pink-400">
            Feature 2
          </div>
          <div className="py-48 px-32 border rounded-3xl bg-green-400">
            Feature 3
          </div>
        </div>
      </div>
    </section>
  );
}
