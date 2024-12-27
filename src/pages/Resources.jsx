import React from 'react';

const Resources = () => {
  const resources = [
    {
      title: "“Liberation Through Education” by Haleema Aslam",
      url: "https://www.youtube.com/watch?v=rq--69eE1D8",
    },
    {
      title: "“My Daughter, Malala” by Ziauddin Yousafzai",
      url: "https://www.ted.com/talks/ziauddin_yousafzai_my_daughter_malala",
    },
    {
      title: "Malala Fund",
      url: "https://malala.org",
    },
  ];

  return (
    <div className="bg-customDarkPink min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-white">Resources</h1>
        <p className="text-white mt-4">
          Explore insightful talks, articles, and organizations advocating for women’s education and empowerment.
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <ul className="space-y-4">
          {resources.map((resource, index) => (
            <li key={index} className="bg-white shadow-lg rounded-lg p-4">
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold underline text-pink-800"
              >
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resources;
