import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const whatsappLink =
  "https://chat.whatsapp.com/GZNiuEOZYYPGOUZQUV1JVa?mode=r_c";

const page = () => {
  return (
    <div className="min-h-screen bg-bg-dark text-ctext overflow-x-hidden break-words">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-800 dark:border-neutral-800">
        <div className="flex items-center space-x-4">
          <Image
            src="/CICRfLOGO.PNG"
            alt="CICR Starter Kit"
            width={100}
            height={100}
            className="rounded-lg hidden dark:block"
          />
          <Image
            src="/CICRfLOGO_WHITE.PNG"
            alt="CICR Starter Kit"
            width={100}
            height={100}
            className="rounded-lg block dark:hidden"
          />
        </div>

        <div className="flex items-center space-x-4 ">
          <Button variant="ghost">
            Login <ArrowRight></ArrowRight>{" "}
          </Button>
          <Button variant="outline">order now</Button>
        </div>
      </header>

      {/* Hero section */}
      <main className="px-4">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex flex-row items-center space-x-2">
                  <h2 className="text-2xl font-bold">CICR:</h2>
                  <h3 className="text-md text-ctext-muted font-semibold">
                    The Robotics Society JIIT 128
                  </h3>
                </div>
                <p className="text-xl text-ctext-muted mb-8 leading-relaxed dark:text-gray-300 md:max-w-full max-w-2xs">
                  Leading the way in robotics research and development with
                  cutting-edge technology and innovative solutions.
                </p>
                <div className="flex items-center space-x-4">
                  <Button size="lg">Order Your Kit</Button>
                  <Link href={whatsappLink} target="_blank">
                    <Button variant="outline" size="lg">
                      Join the Community
                      <ArrowRight />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/Tests/img50.webp"
                  alt="CICR Starter Kit"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t dark:border-gray-200 border-gray-800 my-8" />

        {/* About us */}
        <section className="py-6" id="about">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="relative">
              <Image
                src="/Tests/img50.webp"
                alt="CICR Starter Kit"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="container mx-auto px-4 flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-4 text-yellow-600">
                About Us
              </h2>
              <p className="text-lg leading-relaxed">
                CICR: The Robotics Society of JIIT 128, is a passionate
                community of innovators, engineers, and creators driven by a
                shared love for robotics and automation. Founded to bring
                real-world problem solving into classrooms and beyond, we
                believe in learning by building. From simple mechanisms to
                complex autonomous systems, CICR offers a platform for students
                to explore, experiment, and excel in the field of robotics.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t dark:border-gray-200 border-gray-800 my-8" />

        {/* Our Community */}
        <section className="py-6" id="community">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4 text-yellow-600 text-center">
                Our Community
              </h2>
              <div className="flex flex-col items-start">
                <p className="text-lg leading-relaxed mb-4">
                  At the heart of CICR is a diverse group of students who bring
                  their unique skills and energy to the table. Our community
                  thrives on collaboration, each member contributes not just
                  ideas, but a spirit of curiosity and drive that keeps the club
                  active, inclusive, and inspiring. We support and uplift each
                  other to turn ideas into impact.
                </p>
                <Link href={whatsappLink} target="_blank" className="py-4">
                  <Button variant="ghost" size="lg">
                    View Team
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/Tests/img50.webp"
                alt="CICR Starter Kit"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        <hr className="border-t dark:border-gray-200 border-gray-800 my-8" />

        {/* What Makes Us Unique */}
        <section className="py-6" id="unique">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="relative">
              <Image
                src="/Tests/img50.webp"
                alt="CICR Starter Kit"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="container mx-auto px-4 flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-4 text-yellow-600">
                What Makes Us Unique
              </h2>
              <p className="text-lg leading-relaxed">
                What sets CICR apart is our hands-on approach and cross-domain
                mindset. We're not just coders or builders, we're storytellers,
                designers, researchers, and leaders. Our projects often blend
                hardware with software, creativity with logic, and passion with
                precision. Beyond technical skills, we emphasize real-world
                teamwork, project ownership, and mentorship, ensuring that each
                member leaves with both knowledge and confidence.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t dark:border-gray-200 border-gray-800 my-8" />

        <section className="py-16" id="mission">
          {/* Grid container */}
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* card 1 */}
            <div className="bg-bg rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-ctext-muted">
                To inspire and nurture the next generation of robotics
                innovators.
              </p>
              <Button className="bg-bg-light text-ctext mt-4 hover:bg-bg-light/60">
                Learn More
              </Button>
            </div>

            {/* card 2 */}
            <div className="bg-bg rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-ctext-muted">
                To inspire and nurture the next generation of robotics
                innovators.
              </p>
            </div>

            {/* card 3 */}
            <div className="bg-bg rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-ctext-muted">
                To inspire and nurture the next generation of robotics
                innovators.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t dark:border-gray-200 border-gray-800 my-8" />

        {/* Get in Touch */}
        <section className="py-6" id="contact">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Google Map */}
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="CICR Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1752.8435297986844!2d77.36470699446163!3d28.519061588763527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1754411033963!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                className="border-0 w-full h-full"
              ></iframe>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-yellow-600">
                Get in Touch
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-bg-light border border-gray-300 dark:border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-bg-light border border-gray-300 dark:border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 bg-bg-light border border-gray-300 dark:border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white"
                >
                  Send Message
                </Button>
              </form>

              {/* Contact Email */}
              <p className="mt-6 text-ctext-muted">
                Or email us directly at{" "}
                <a
                  href="mailto:contact@cicr.in"
                  className="text-yellow-500 underline"
                >
                  contact@cicr.in
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 dark:border-gray-200 py-12 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/CICRfLOGO.PNG"
                  alt="CICR Starter Kit"
                  width={100}
                  height={100}
                  className="rounded-lg hidden dark:block"
                />
                <Image
                  src="/CICRfLOGO_WHITE.PNG"
                  alt="CICR Starter Kit"
                  width={100}
                  height={100}
                  className="rounded-lg block dark:hidden"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Shaping the future of robotics
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4 dark:text-white">
                Quick Links
              </h5>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-black dark:hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 dark:text-white">Support</h5>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-black dark:hover:text-white"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 dark:text-white">Connect</h5>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <Link
                    href="https://www.instagram.com/cicr_jiit"
                    target="_blank"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/cicrjiit128/"
                    target="_blank"
                    className="hover:text-black dark:hover:text-white"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-black dark:hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Discord
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="border-t dark:border-gray-200 border-gray-800 mt-8 pt-8 flex justify-between items-center flex-col md:flex-row">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} CICR - The Robotics Society JIIT
              128. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Theme:
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
