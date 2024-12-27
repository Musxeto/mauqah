import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const InterviewsSabrina = () => {
  return (
    <div className="bg-inherit text-white py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold hover:text-pink-500 transition-colors duration-300">
            Interview with Miss Sabrina
          </h2>
          <p className="text-lg md:text-xl mt-4">Discover her insights and journey.</p>
        </div>

        {/* Part 1 */}
        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-pink-500 transition-colors duration-300">
            Part 1
          </h3>
          <AudioPlayer
            src="/sabrina1.m4a"
            customAdditionalControls={[]}
            showJumpControls={false}
            layout="horizontal-reverse"
            autoPlay={false}
            className="custom-audio-player"
          />
        </div>

        {/* Part 2 */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-pink-500 transition-colors duration-300">
            Part 2
          </h3>
          <AudioPlayer
            src="/sabrina2.m4a"
            customAdditionalControls={[]}
            showJumpControls={false}
            layout="horizontal-reverse"
            autoPlay={false}
            className="custom-audio-player"
          />
        </div>
      </div>
    </div>
  );
};

const InterviewsSitara = () => {
  return (
    <div className="bg-inherit text-white py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold hover:text-pink-500 transition-colors duration-300">
            Interview with Miss Sitara
          </h2>
        </div>
        <div>
          <AudioPlayer
            src="/sitara.m4a"
            customAdditionalControls={[]}
            showJumpControls={false}
            layout="horizontal-reverse"
            autoPlay={false}
            className="custom-audio-player"
          />
        </div>
      </div>
    </div>
  );
};

export {InterviewsSabrina,InterviewsSitara}