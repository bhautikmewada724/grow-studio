import React, { useState, useRef } from "react";

const HowWeWork = () => {
  const [clips, setClips] = useState([]);
  const fileRef = useRef(null);

  const handleFiles = (files) => {
    const newClips = Array.from(files).map((file) => ({
      id: URL.createObjectURL(file),
      name: file.name,
    }));
    setClips((s) => [...newClips, ...s]);
  };

  const onPick = (e) => {
    handleFiles(e.target.files);
  };

  const removeClip = (id) => {
    setClips((s) => s.filter((c) => c.id !== id));
  };

  return (
    <section id="how-we-work" className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">How we work</h2>
        <p className="text-lg text-stone-600 mb-8">
          We capture concepts, shoot footage, and craft the final edits. Add clips
          below — they’ll appear as previews so you can arrange or replace them.
        </p>

        <div className="mb-8">
          <input
            ref={fileRef}
            onChange={onPick}
            accept="video/*"
            multiple
            type="file"
            className="hidden"
          />
          <button
            onClick={() => fileRef.current && fileRef.current.click()}
            className="inline-block bg-black text-white px-6 py-3 rounded-full"
          >
            Add clips
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clips.length === 0 && (
            <div className="col-span-full text-stone-500">No clips yet — use "Add clips" to upload local videos and preview them here.</div>
          )}

          {clips.map((clip) => (
            <div key={clip.id} className="relative bg-stone-100 rounded overflow-hidden">
              <video
                src={clip.id}
                controls
                className="w-full h-56 object-cover"
              />
              <div className="p-3 flex justify-between items-center">
                <span className="text-sm truncate">{clip.name}</span>
                <button
                  onClick={() => removeClip(clip.id)}
                  className="text-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
