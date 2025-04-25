import Image from "next/image"
import { ArrowRight, Heart, Mail, MapPin, Phone } from "lucide-react"

export default function Home() {
  const YouthHighwayData = {
    welcome: "Welcome to Youth Highway",
    vision:
      "To create a world where every young person has the literacy, support, and opportunity to thrive—empowered by a community that uplifts and believes in their potential.",
    mission:
      "Youth Highway is a 501(c)(3) nonprofit organization committed to improving youth literacy and overall well-being. Through education, outreach, and advocacy, we strive to inspire change and create a positive path forward for children and families in our community. We aim to educate the nation about the diverse challenges youth face today—and how we can make a difference, together.",
    about: {
      founder: "David Carmon",
      description:
        "Youth Highway is a youth-based charitable organization serving Sacramento and surrounding communities. We believe every child deserves to be seen, supported, and celebrated.",
      programs: [
        {
          name: "Annual Toy Drive",
          description: "Providing over 20,000 toys during the holidays",
        },
        {
          name: "Backpack & School Supply Drives",
          description: "Equipping students for success",
        },
        {
          name: "Feeding the Homeless",
          description: "Providing meals and hope for those in need",
        },
        {
          name: "Pajamas for Foster Children",
          description: "Comforting kids during uncertain times",
        },
        {
          name: "Scholarship Programs",
          description: "Investing in the futures of local youth",
        },
        {
          name: "Shoe Drives",
          description: "Ensuring every child walks with confidence",
        },
        {
          name: "My Kid is Bullied Because of His Clothes Initiative",
          description: "Annual shopping spree for children facing bullying",
        },
      ],
      spirit: "We are more than an organization—we are a movement of compassion, action, and transformation.",
    },
    support: {
      description:
        "As a registered 501(c)(3), your donation to Youth Highway is tax-deductible and directly benefits children and families in need. Your generous support doesn't just help our youth—it strengthens our entire community. It also provides recognition for your business or organization, showing your commitment to social impact and community leadership.",
      callToAction:
        "Join us in making a difference. Your contribution helps us tell better stories, empower more youth, and create brighter futures.",
      donateLink: "#donate",
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-500">Youth Highway</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#mission" className="text-gray-700 hover:text-blue-500 transition">
              Mission
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-500 transition">
              About
            </a>
            <a href="#programs" className="text-gray-700 hover:text-blue-500 transition">
              Programs
            </a>
            <a href="#support" className="text-gray-700 hover:text-blue-500 transition">
              Support Us
            </a>
          </div>
          <a href="#donate" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
            Donate
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                {YouthHighwayData.welcome}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{YouthHighwayData.vision}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#programs"
                  className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-600 transition flex items-center justify-center"
                >
                  Our Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#support"
                  className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-50 transition flex items-center justify-center"
                >
                  Support Our Mission
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?key=c2xdf"
                alt="Children reading together"
                width={600}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">{YouthHighwayData.mission}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?key=a49oa"
                alt="Founder David Carmon"
                width={600}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Us</h2>
              <div className="w-20 h-1 bg-blue-500 mb-8"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{YouthHighwayData.about.description}</p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by <span className="font-semibold">{YouthHighwayData.about.founder}</span>, our organization has
                grown into a vital resource for youth in Sacramento and beyond.
              </p>
              <p className="text-lg text-gray-600 italic">&qout;{YouthHighwayData.about.spirit}&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Programs</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Through our diverse initiatives, we&apos;re making a tangible difference in the lives of young people across
              our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {YouthHighwayData.about.programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{program.name}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 md:py-24 bg-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20,000+</div>
              <div className="text-lg">Toys Distributed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
              <div className="text-lg">Backpacks Provided</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1,000+</div>
              <div className="text-lg">Meals Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-lg">Scholarships Awarded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Support Our Mission</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{YouthHighwayData.support.description}</p>
              <p className="text-lg text-gray-800 font-medium mb-8">{YouthHighwayData.support.callToAction}</p>

              <div id="donate" className="bg-gray-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Make a Donation</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Your contribution helps us create brighter futures for youth in our community.
                </p>
                <a
                  href="https://www.paypal.com/donate?hosted_button_id=YOURHOSTEDIDBUTTONHERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition"
                >
                  Donate via PayPal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Voices of Impact</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="mb-4 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4 italic">
                &quot;Youth Highway provided my children with backpacks and school supplies when we couldn&apos;t afford them. The
                confidence it gave them was priceless.&quot;
              </p>
              <div className="font-medium">- Sarah M., Parent</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="mb-4 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4 italic">
                &quot;The scholarship I received from Youth Highway changed my life. I&apos;m the first in my family to attend
                college, and I couldn&apos;t have done it without their support.&quot;
              </p>
              <div className="font-medium">- Marcus J., Scholarship Recipient</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="mb-4 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4 italic">
                &quot;As a teacher, I&apos;ve seen firsthand how Youth Highway&apos;s programs boost student confidence and engagement.
                Their work makes a real difference in our classrooms.&quot;
              </p>
              <div className="font-medium">- Lisa T., Educator</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Whether through volunteering, donating, or spreading the word, your support helps us create brighter futures
            for youth in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#donate"
              className="bg-white text-blue-500 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition"
            >
              Donate Now
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Youth Highway</h3>
              <p className="text-gray-300 mb-4">
                A 501(c)(3) nonprofit organization committed to improving youth literacy and overall well-being.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-700 hover:bg-blue-500 p-2 rounded-full transition">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-700 hover:bg-blue-500 p-2 rounded-full transition">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-700 hover:bg-blue-500 p-2 rounded-full transition">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">123 Community Way, Sacramento, CA 95814</span>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">info@youthhighway.org</span>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">(916) 555-1234</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#mission" className="text-gray-300 hover:text-blue-400 transition">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-blue-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-gray-300 hover:text-blue-400 transition">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#support" className="text-gray-300 hover:text-blue-400 transition">
                    Support Us
                  </a>
                </li>
                <li>
                  <a href="#donate" className="text-gray-300 hover:text-blue-400 transition">
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Youth Highway. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
