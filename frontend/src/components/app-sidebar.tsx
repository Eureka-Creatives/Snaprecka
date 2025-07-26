export function AppSidebar() {
  return (
    <section className="w-[18%] text-black max-lg:hidden flex flex-col items-center justify-center gap-5 fixed py-20">
      <div className="flex justify-center gap-2 rounded-full h-32 w-32 px-auto bg-soft-blue/10"></div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-base">Welcome Daniel</span>
      </div>
    </section>
  );
}
