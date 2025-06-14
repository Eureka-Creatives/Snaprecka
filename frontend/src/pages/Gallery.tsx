export default function Gallery() {
  return (
    <section className="px-6">
      <div className="">
        <h1 className="font-semibold text-[#9d4edd]">Photo Gallery</h1>
        <p className="text-base mt-1 text-white">
          Explore your collection – a showcase of moments, memories, and
          milestones captured in vibrant detail.
        </p>
      </div>
      <div className="flex mt-2 gap-3">
        <div className="w-1/4">
          <img src="" alt="" className="h-100 bg-white" />
        </div>
        <div className="w-2/4 flex flex-wrap gap-1">
          <div className="w-1/2">
            <img src="" alt="" className="h-50 bg-white" />
          </div>
          <div className="w-1/2">
            <img src="" alt="" className="h-50 bg-white" />
          </div>
          <div className="w-1/2">
            <img src="" alt="" className="h-50 bg-white" />
          </div>
        </div>
        <div className="w-1/4">
          <img src="" alt="" className="h-100 bg-white" />
        </div>
      </div>
    </section>
  );
}
