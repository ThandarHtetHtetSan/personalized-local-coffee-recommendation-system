// import Layout from '@/components/Layout';
// import Image from 'next/image';

// export default function About() {
//   return (
//     <Layout>
//       <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("\images\coffee-texture.jpg")' }}>
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
//           <h1 className="text-4xl font-bold mb-6">About Us</h1>
//           <p className="text-xl max-w-2xl">
//           BIOS IMI International, Inc. delivers high-quality American-made compounding devices focused on customer satisfaction and service. We are a leader in Tamper Evident Cap Technology, offering dedicated support professionals and a mission to build lasting relationships with pharmaceutical and compounding professionals.
//           </p>
//         </div>
//     </div>
//     </Layout>
//   );
//}
// import React from 'react';
// import Image from 'next/image';

// const AboutUs = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[url('/images/coffee-texture.jpg')] bg-cover bg-center">
//       <div className="bg-white bg-opacity-70 p-10 rounded-lg shadow-lg max-w-3xl text-center">
//         <h1 className="text-5xl font-extrabold mb-6 text-brown-800">About Us</h1>
//         <p className="text-lg md:text-xl text-brown-700 mb-6">
//           BIOS IMI International, Inc. delivers high-quality American-made compounding devices focused on customer satisfaction and service. We are a leader in Tamper Evident Cap Technology, offering dedicated support professionals and a mission to build lasting relationships with pharmaceutical and compounding professionals.
//         </p>
//         <button className="bg-brown-700 hover:bg-brown-900 text-white font-bold py-2 px-4 rounded">
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
import Layout from '@/components/Layout';
import React from 'react';

const About = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <div className="bg-[url('/images/coffee_bg.jpg')] bg-cover bg-center h-96 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">About Our Coffee Recommendation System</h1>
        </div>
        <div className="max-w-5xl mx-auto p-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-center mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              Welcome to our Coffee Recommendation System! Our mission is to help coffee enthusiasts discover the perfect coffee
              tailored to their taste preferences. Whether you prefer a light, fruity flavor or a rich, dark roast, our system
              uses advanced algorithms to suggest the best coffee options for you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Comprehensive Dataset</h3>
                <p className="text-gray-700">
                  Our recommendation system is based on a comprehensive dataset of various coffee products, including their roast levels,
                  ground types, fragrances, flavors, and body profiles. By analyzing this data, we can provide personalized coffee
                  suggestions that match your unique taste preferences.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">State-of-the-Art Technology</h3>
                <p className="text-gray-700">
                  The system is built using state-of-the-art technologies, including K-Nearest Neighbors (KNN) algorithm for precise
                  recommendations and a user-friendly interface developed with React.js and Tailwind CSS. We are committed to offering
                  a seamless and enjoyable experience for all coffee lovers.
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-center">
              We hope you enjoy exploring new coffee varieties and finding your perfect cup with our recommendation system. Cheers
              to a great coffee experience!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;


