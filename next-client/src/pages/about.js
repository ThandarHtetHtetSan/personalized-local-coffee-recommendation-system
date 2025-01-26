import React from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout';
const About = () => {
  return (
    <Layout>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-4">About Our Coffee Recommendation System</h1>
        
        {/* Image Section */}
        <div className="flex flex-wrap justify-center space-x-4 mb-6">
          <div className="relative w-64 h-64">
            <Image
              src="/images/recipes/bc2.jpg"
              alt="Coffee Recommendation Overview"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-64 h-64">
            <Image
              src="/images/recipes/bc1.jpg"
              alt="Coffee Recommendation Interface"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="prose">
          <h2 className="text-2xl font-semibold">What is Our Coffee Recommendation System?</h2>
          <p>
            Our Coffee Recommendation System is designed to help coffee enthusiasts discover new and exciting coffee blends based on their preferences. Whether you’re a fan of light roasts or dark, bold flavors, our system uses advanced algorithms to provide personalized coffee suggestions tailored just for you.
          </p>

          <h2 className="text-2xl font-semibold">How Does It Work?</h2>
          <p>
            We utilize the K-Nearest Neighbors (KNN) algorithm to analyze your input preferences and compare them to our extensive coffee dataset. By considering factors such as roast level, ground type, fragrance, flavor, and body, the system recommends coffee options that match your taste profile.
          </p>
          
          <h2 className="text-2xl font-semibold">Features</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Personalized coffee recommendations based on user inputs.</li>
            <li>Easy-to-use interface for selecting your preferred coffee characteristics.</li>
            <li>Comprehensive dataset including various coffee blends to choose from.</li>
            <li>Responsive design optimized for both desktop and mobile devices.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Highlight: Automated Recommendations</h2>
          <p>
            Our system offers tailored recommendations based on your roast level selection. Here’s how your choice of roast level influences other coffee attributes:
          </p>
          <ul className="list-disc list-inside mb-4">
            <strong>For Light Roast:</strong> 
              <ul className="list-disc list-inside">
                <li><strong>Fragrance:</strong> Fruity</li>
                <li><strong>Body:</strong> Lighter</li>
                <li><strong>Flavor:</strong> Very Sweet</li>
              </ul>
            
            <strong>For Medium Light Roast:</strong> 
              <ul className="list-disc list-inside">
                <li><strong>Fragrance:</strong> Floral</li>
                <li><strong>Body:</strong> Light</li>
                <li><strong>Flavor:</strong> Sweet</li>
              </ul>
            
            <strong>For Medium Roast:</strong> 
              <ul className="list-disc list-inside">
                <li><strong>Fragrance:</strong> Normal</li>
                <li><strong>Body:</strong> Medium</li>
                <li><strong>Flavor:</strong> Normal</li>
              </ul>
            
            <strong>For Medium Dark Roast:</strong> 
              <ul className="list-disc list-inside">
                <li><strong>Fragrance:</strong> Spicy</li>
                <li><strong>Body:</strong> Full</li>
                <li><strong>Flavor:</strong> Bitter</li>
              </ul>
            
            <strong>For Dark Roast:</strong> 
              <ul className="list-disc list-inside">
                <li><strong>Fragrance:</strong> Smoky</li>
                <li><strong>Body:</strong> Heavy</li>
                <li><strong>Flavor:</strong> Very Bitter</li>
              </ul>
            
          </ul>
          <p>
            These recommendations ensure that your coffee choice not only aligns with your roast preference but also complements it with a harmonious flavor profile.
          </p>

          <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
          <p>
            Our system is built with a passion for coffee and a commitment to helping you find your perfect cup. With our advanced recommendation algorithms and user-friendly design, discovering new coffee favorites has never been easier. Enjoy a seamless experience and explore a world of coffee with just a few clicks!
          </p>
          
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions or feedback, feel free to <a href="mailto:support@coffeerecommendation.com" className="text-blue-600 hover:underline">email us</a>. We’d love to hear from you!
          </p>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default About
