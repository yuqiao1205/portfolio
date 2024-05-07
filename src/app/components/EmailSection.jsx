"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  // return (
  //   <section
  //     id="contact"
  //     className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
  //   >
  //     <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
  //     <div className="z-10">
  //       <h5 className="text-xl font-bold text-white my-2">
  //         Let&apos;s Connect
  //       </h5>
  //       <p className="text-[#ADB7BE] mb-4 max-w-md">
  //         {" "}
  //         I&apos;m currently looking for new opportunities, my inbox is always
  //         open. Whether you have a question or just want to say hi, I&apos;ll
  //         try my best to get back to you!
  //       </p>
  //       <div className="socials flex flex-row gap-2">
  //         <Link href="https://github.com/yuqiao1205">
  //           <Image src={GithubIcon} alt="Github Icon" />
  //         </Link>
  //         <Link href="https://www.linkedin.com/in/yan-peng-b40b82307/">
  //           <Image src={LinkedinIcon} alt="Linkedin Icon" />
  //         </Link>
  //       </div>
  //     </div>
  //     <div>
  //       <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
  //     </div>
      
  //   </section>
  // );
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="h-60 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
       
       
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
        <h2 className="text-[#ADB7BE] mb-4 max-w-md">
          You can also reach me at <a href="mailto:loran1226@gmail.com" className="text-white underline">loran1226@gmail.com</a>.
        </h2>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/yuqiao1205">
            <Image src={GithubIcon} alt="Github Icon" /><span style={{ color: 'white' }}>GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/yan-peng-b40b82307/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" /><span style={{ color: 'white' }}>Linkedin</span>
          </Link>
        </div>
      </div>
    </section>
  );

};

export default EmailSection;
