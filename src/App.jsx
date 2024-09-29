import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import meme from "../public/assets/meme.jpeg";
import memesData from "./component/memesData";

function MemeGenerator() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [memeImage, setMemeImage] = useState(null);
  const memeRef = useRef(null);

  const handleImageUpload = (event) => {
    setMemeImage(URL.createObjectURL(event.target.files[0]));
  };

  const generateRandomMeme = () => {
    const memesArray = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomIndex].url);
  };

  const downloadMeme = async () => {
    if (memeRef.current) {
      const canvas = await html2canvas(memeRef.current, { useCORS: true });
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "meme.png";
      link.click();
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="flex gap-4 p-4 bg-gray-400 shadow-md">
        <h1 className="text-4xl font-bold text-white">MemesLand</h1>
        <img src={meme} alt="Meme Icon" className="w-12 h-12" />
      </header>
      <div className="min-h-screen bg-slate-500 px-4">
        {/* Image Upload Section */}
        <div className="flex flex-col items-center justify-center py-10  ">
          <div className="neumorphic p-6 rounded-xl mb-6 shadow-lg flex flex-col items-center gap-2 w-full max-w-lg">
            <input
              type="file"
              accept="image/*"
              className="neumorphic-input p-4 text-center cursor-pointer rounded-lg"
              onChange={handleImageUpload}
            />
            <p className="text-black font-bold">Or</p>
            <button
              onClick={generateRandomMeme}
              className="neumorphic-button p-2 rounded-lg text-lg font-semibold shadow-neumorphic mt-2"
            >
              Generate Image
            </button>
          </div>

          {/*  Inputs for Meme Text */}
          <div className="flex gap-20  lg:flex-row items-center lg:space-x-4 mb-6">
            <input
              type="text"
              className="neumorphic-input p-3 rounded-lg focus:outline-none w-full lg:w-1/2"
              placeholder="Top Text"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
            />
            <input
              type="text"
              className="neumorphic-input p-3 rounded-lg focus:outline-none w-full lg:w-1/2"
              placeholder="Bottom Text"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
            />
          </div>

          {memeImage && (
            <div
              ref={memeRef}
              className="relative mb-6 neumorphic p-6 rounded-xl shadow-lg max-w-lg w-full flex justify-center items-center bg-gray-900"
            >
              <img
                src={memeImage}
                alt="Meme"
                className="w-full h-auto rounded-lg mx-auto"
                crossOrigin="anonymous"
              />

              <h2 className="absolute top-5 left-1/2 transform -translate-x-1/2 text-white text-8xl font-bold text-center">
                {topText}
              </h2>

              <h2 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-8xl font-bold text-center mb-4">
                {bottomText}
              </h2>
            </div>
          )}

          {memeImage && (
            <button
              className=" w-fit neumorphic-button p-4 rounded-lg text-lg font-semibold shadow-neumorphic hover:shadow-none transition"
              onClick={downloadMeme}
            >
              Download Meme
            </button>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-6 py-4 border-t border-gray-600 w-full text-center text-white">
          <p className="text-">
            Made with ❤️ by
            <a
              href="https://github.com/Rampop01/Memes-generator"
              className=" text-blue-400"
            >
              ~Popoola Rahmat Omowumi~
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default MemeGenerator;
