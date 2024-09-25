import React, { useState } from "react";
import logo from "../public/assets/logo.ico";

import meme from "../public/assets/meme.jpeg";
function MemeGenerator() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [memeImage, setMemeImage] = useState(null);

  const handleImageUpload = (event) => {
    setMemeImage(URL.createObjectURL(event.target.files[0]));
  };
  //bg-[#726c69]
  return (
    <div className=" overflow-hidden">
      <header className=" flex justify-between p-4 gap-4 bg-gray-400  shadow-b-white shadow-md">
        <h1 className="text-4xl font-bold text-white  neumorphic-text">
          MemesLand
        </h1>
        <img src={logo} alt="" className="w-12 h-12" />
        <img src={meme} alt="" className="w-12 h-12" />
      </header>

      <div className=" h-screen flex flex-col items-center justify-center bg-gray-200 py-6 shadow-md">
        {/* Image Upload Section */}
        <div className="neumorphic p-6 rounded-xl mb-6 shadow-neumorphic">
          <input
            type="file"
            accept="image/*"
            className="neumorphic-input p-4 text-center cursor-pointer rounded-lg"
            onChange={handleImageUpload}
          />
        </div>

        {/* Text Inputs */}
        <div className="flex flex-col space-y-4 mb-6 neumorphic p-6 rounded-xl shadow-neumorphic">
          <input
            type="text"
            className="neumorphic-input p-3 rounded-lg focus:outline-none"
            placeholder="Top Text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
          />
          <input
            type="text"
            className="neumorphic-input p-3 rounded-lg focus:outline-none"
            placeholder="Bottom Text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
          />
        </div>

        {/* Meme image section */}
        {memeImage && (
          <div className="relative mb-6 neumorphic p-6 rounded-xl shadow-neumorphic">
            <img src={memeImage} alt="Meme" className="max-w-xs rounded-lg" />
            <h2 className="absolute top-5 left-5 text-white text-2xl font-bold">
              {topText}
            </h2>
            <h2 className="absolute bottom-5 left-5 text-white text-2xl font-bold">
              {bottomText}
            </h2>
          </div>
        )}

        {/* Generate Button */}
        <button className="neumorphic-button p-4 rounded-lg text-lg font-semibold shadow-neumorphic hover:shadow-none transition">
          Generate Meme
        </button>

        {/* Footer */}

        <footer className="mt-4 py-4 border-t border-gray-600 w-full text-center">
          <p className="text-gray-600">
            Made with ❤️ by{" "}
            <a href="" className="text-blue-600">
              Popoola Rahmat Omowumi{" "}
            </a>
            using React and Tailwind Neumorphism
          </p>
        </footer>
      </div>
    </div>
  );
}

export default MemeGenerator;
