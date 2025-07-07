import React from "react";

function About() {
  return (
    <>
      <div className=" skills flex justify-center" id="about">
        <p className="text-white text-4xl  my-8 font-bold">About Me</p>
      </div>
      <div className="p-6 md:p-14 flex flex-col md:flex-row justify-center md:justify-evenly flex-wrap text-white gap-8 max-w-7xl mx-auto">
        {/* Education Section */}
        <div className="border border-gray-600 p-6 md:p-10 w-full md:w-5/12 flex flex-col gap-4 rounded-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-500">Education</h1>
          <h2 className="text-lg md:text-xl font-semibold ">
            Bachelor of Computer Applications (BCA)
          </h2>
          <h3 className="text-base md:text-lg text-violet-500">2023 – 2027 (ongoing)</h3>
          <p className="text-sm md:text-base leading-relaxed">
           I am pursuing a Bachelor of Computer Applications (BCA) at Netaji Subhash Engineering College, Kolkata. My studies focus on programming, database management, software development, and web technologies. I am committed to building skills in application development and problem-solving to prepare for a career in tech.
          </p>
        </div>

        {/* Experience Section */}
        <div className="border border-gray-600 p-6 md:p-10 w-full md:w-5/12 flex flex-col gap-4 rounded-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-500">Experience</h1>
          <h2 className="text-lg md:text-xl font-semibold ">
            Web Development Intern — GAO Tek Inc.
          </h2>
          <h3 className="text-base md:text-lg text-violet-500">Remote | Nov 2024 – Feb 2025</h3>
          <p className="text-sm md:text-base leading-relaxed">
            Worked on various client websites using WordPress, focusing on
            responsive design, performance, and SEO. Developed and customized
            websites for healthcare, construction, and other industries.
            Integrated plugins, optimized themes, and ensured mobile-first
            design.
          </p>
          <a href="/certificate.pdf" target="blank"   rel="noopener noreferrer"  className="text-blue-500 text-lg hover:underline mt-2 inline-block">
            View certificate
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
