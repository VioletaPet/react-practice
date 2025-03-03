import React, { useEffect } from 'react';
import RentaPetThumbnail from "../../assets/RentaPetThumbnail.png";
import SearchResultsPage from "../../assets/rentapet/searchresults.png";
import BookingPage1 from "../../assets/rentapet/bookingpage1.png";
import BookingPage2 from "../../assets/rentapet/bookingpage2.png";
import BookingDetails from "../../assets/rentapet/bookingdetails.png";
import ReviewPage from "../../assets/rentapet/reviewpage.png";
import ListingsPage from "../../assets/rentapet/listingspage.png";
import EditListing1 from "../../assets/rentapet/editlisting1.png";
import EditListing2 from "../../assets/rentapet/editlisting2.png";
import CreateListing1 from "../../assets/rentapet/createlisting1.png";
import CreateListing2 from "../../assets/rentapet/createlisting2.png";

import VideoHomepage from "../../assets/videos/rentapet/homepage.mp4";
import VideoShowPage from "../../assets/videos/rentapet/showpage.mp4";
import VideoBookingProcess from "../../assets/videos/rentapet/bookingprocess.mp4";



export const RentaPet = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 mt-10">
      {/* Thumbnail */}
      <img
        src={RentaPetThumbnail}
        alt="RentaPet Thumbnail"
        className="w-80 h-auto md:w-100 md:h-50 mx-auto mb-6 rounded-xl shadow-lg"
      />

      {/* Title & Description */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent text-center">
        RentaPet
      </h1>
      <p className="text-gray-600 text-xl text-center max-w-2xl">
        StreamCaddy was my team's final project at the Le Wagon Bootcamp, where we applied all the skills we acquired over three months!
      </p>

      <div className="mt-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {["HTML", "CSS", "JavaScript", "Ruby on Rails", "PostgreSQL", "Bootstrap", "SASS", "Heroku", "Cloudinary"].map((tech) => (
            <span key={tech} className="border-2 border-gray-400 px-4 py-2 text-gray-700 font-semibold rounded-lg text-center hover:border-yellow-400">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a
        href="https://github.com/VioletaPet/StreamCaddy"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 px-6 py-3 text-white bg-gradient-to-r from-yellow-500 to-green-400 hover:from-yellow-600 hover:to-green-500 hover:scale-105 transition-all duration-300 rounded-full shadow-md"
      >
        View Code
      </a>

      <div className='grid grid-cols-2 md:grid-cols-2 gap-10 mt-10 mb-10 max-w-7xl'>
        <div className="mt-12 max-w-3xl text-justify" id='implementation'>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Implementation
          </h2>
          <p className="text-gray-600 text-lg">The successful development of RentaPet was driven by strong team collaboration, facilitated by tools like Zoom for real-time communication, Slack for sharing updates and code snippets, and Notion for organizing tasks, deadlines, and milestones. This approach ensured efficiency, quick problem-solving, and kept the project on track.</p>
        </div>

        <div className="mt-12 max-w-3xl text-justify" id='collaboration'>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4 center">
            Team Collaboration
          </h2>
          <p className="text-gray-600 text-lg">For the foundational structure of the application, my team and I worked together to establish the core components:<br />
          The routes, controllers, models, and the database schema, ensuring everything was well-integrated from the start. This joint effort allowed us to build a solid backend framework that would support all the features of the platform, from pet listings to bookings. Each team member contributed their expertise to ensure a smooth and efficient structure for the application to function seamlessly.</p>
        </div>

        <div className="mt-12 max-w-5xl text-justify col-span-2 mx-auto text-center" id='challenges'>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Challenges
          </h2>
          <ul className='text-gray-600 text-justify list-disc list-inside space-y-1 text-lg'>
            <li className='mb-5'>CRUD Functionality for Listings - Implementing proper creation, updating, and deletion features while ensuring data consistency</li>
            <li className='mb-5'>Map and Location Services - Ensuring correct pin placement on maps for pet listings and providing accurate geographical data</li>
            <li className='mb-5'>Heroku Deployment Issues - Debugging deployment-related errors while working with Heroku for the first time</li>
            <li className='mb-5'>Search and Filtering Implementation - Creating an efficient location-based search with filters to help users find pets easily</li>
            <li className='mb-5'>First-time use of Cloudinary, integrating it wirh Active Storage to upload and host images</li>
            <li className='mb-5'>Booking System Complexity - Managing seamless booking, tracking, availability updates, and automatic date blocking</li>
            <li className='mb-5'>Review System Accuracy – Implementing a dynamic rating system where users can leave reviews that accurately impact pet ratings</li>
          </ul>
        </div>
      </div>

      <div className='mt-12 max-w-5xl text-justify mb-10' id='contributions'>
        <h2 className='text-3xl font-semibold text-gray-700 mb-4'>
          My Contributions
        </h2>
        <ul className='text-gray-600 text-justify list-disc list-inside space-y-1 text-lg'>
          <li className='mb-5'><strong>Designed and Developed Key UI Components:</strong> Created animal cards for engaging pet displays, crafted the logo, and designed a seamless banner that integrates smoothly into the footer</li>
          <li className='mb-5'><strong>Responsive Layout Adjustments:</strong> Adjusted the banner size to be larger on the homepage and smaller on other pages for a balanced visual hierarchy</li>
          <li className='mb-5'><strong>Implemented Search & Filtering:</strong> Developed a dropdown list in the search bar to allow users to filter pets by category</li>
          <li className='mb-5'><strong>Developed Reviews Section:</strong> Designed and implemented both the backend and frontend for the reviews feature, ensuring users can leave feedback</li>
          <li className='mb-5'><strong>Built Booking System Logic:</strong> Developed the backend logic for handling new bookings, differentiating between a user’s own bookings and those for their pets. Implemented restrictions so users can only review pets they don’t own</li>
          <li className='mb-5'><strong>CRUD Functionality for Listings:</strong> Implemented create, update, and delete operations for pet listings, ensuring full control over available pets</li>
          <li className='mb-5'><strong>Cancellation System:</strong> Coded the backend logic to allow users to cancel bookings seamlessly</li>
          <li className='mb-5'><strong>Form Design & Styling:</strong> Created a simple form and datepicker with a teammate and styled form elements throughout the application for a consistent user-friendly experience</li>
        </ul>
      </div>

      <div className='mt-12 max-w-10xl text-justify mb-10'>
        <h2 className='text-4xl font-semibold text-gray-700 mb-4 text-center'>
          Project Deep Dive
        </h2>


        <h3 className='text-3xl font-semibold text-gray-700 my-10 text-center'>
          Homepage
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 mx-6 mb-10 items-center p-10 rounded-lg [box-shadow:0_0_15px_rgba(0,0,0,0.2)]'>
          <div className='flex justify-center md:col-span-2'>
            <video controls className='w-full h-auto my-5'>
              <source
                src={VideoHomepage}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='text-gray-700 text-justify'>
            <p className='text-gray-700mb-10 text-lg mb-10'>This page is the first touchpoint for users. They can immediately browse through available pets or use the search bar to refine their options.<br />
            From here, they can explore more details by clicking on a pet listing or log in/sign up to make a booking.</p>

            <p className='text-gray-700 text-left font-semibold text-lg'>Key features:</p>
            <ul className='list-disc list-inside space-y-2 text-lg mb-10'>
              <li>Banner with a logo, search bar and log in/sign up options</li>
              <li>Animal listings displaying main information</li>
            </ul>

            <p className='text-gray-700 text-left font-semibold text-lg'>My contribution:</p>
            <ul className='list-disc list-inside space-y-2 text-lg'>
              <li>Created <strong>animal cards</strong> for an engaging pet display</li>
              <li>Crafted the <strong>logo</strong> to reflect the platform's identity</li>
              <li>Developed a seamless <strong>banner</strong> with a continuous visual flow into the footer</li>
              <li>Designed and implemented the <strong>footer</strong> for a polished user experience</li>
            </ul>
          </div>
        </div>



        <h3 className='text-3xl font-semibold text-gray-700 mb-10 mt-30 text-center'>
          Search Results Page
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 mx-6 mb-10 items-center p-10 pl-15 rounded-lg [box-shadow:0_0_15px_rgba(0,0,0,0.2)]'>
          <div className='text-gray-700 text-justify'>
            <p className='text-gray-700 font-semibold text-lg'>Key features:</p>
            <ul className='list-disc list-inside space-y-2 text-lg'>
              <li>A grid with pets matching the user’s search query</li>
              <li>A sticky map that pinpoints the animals’ locations</li>
              <li>Clicking on a pin on the map, a card is displayed showing the details of the animal associated with that location</li>
            </ul>
            <p className='text-gray-700 font-semibold text-lg mt-10'>My contribution:</p>
            <ul className='list-disc list-inside space-y-2 text-lg'>
              <li>Adjusted the banner to be larger on the homepage and smaller on other pages</li>
              <li>Created a dropdown list in the search bar for selecting different kinds of animals</li>
            </ul>
          </div>
          <div className='flex justify-center md:col-span-2'>
            <img
              src={SearchResultsPage}
              alt="Search Results Page"
              className='md:w-2/3 md:h-auto my-5 object-contain'
            />
          </div>
        </div>



        <h3 className='text-3xl font-semibold text-gray-700 mb-10 mt-30 text-center'>
          Animal Show Page
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 mx-6 mb-10 items-center p-10 rounded-lg [box-shadow:0_0_15px_rgba(0,0,0,0.2)]'>
          <div className='flex justify-center md:col-span-2'>
            <video controls className='w-full h-auto my-5'>
              <source
                src={VideoShowPage}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='text-gray-700 text-justify'>
            <p className='text-gray-700 text-left mb-10 text-lg'>This video demonstrates the entire page, showcasing how users can view detailed pet information, select dates, and complete bookings.</p>

            <p className='text-gray-700 font-semibold text-lg'>Key features:</p>
            <ul className='list-disc list-inside space-y-2 text-lg mb-10'>
              <li>Reviews and information about each animals are dynamically fetched from the database and displayed on the page</li>
              <li>Simple form for the booking process</li>
              <li>Automatically calculated pricing</li>
              <li>A map showing the pet's location</li>
            </ul>
          </div>
          <div className='text-gray-700 text-left'>
            <p className='text-gray-700 font-semibold text-lg'>My contribution:</p>
            <ul className='list-disc list-inside space-y-2 text-lg'>
              <li>Crafted the backend logic and designed the frontend of the reviews section</li>
            </ul>
          </div>
          <div className='flex justify-center md:col-span-2 mt-10'>
            <img
              src={SearchResultsPage}
              alt="Search Results Page"
              className='w-2/3 h-auto object-contain'
            />
          </div>
        </div>



        <h3 className='text-3xl font-semibold text-gray-700 mb-10 mt-30 text-center'>
          Booking Process
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 mx-6 mb-10 items-center p-10 rounded-lg [box-shadow:0_0_15px_rgba(0,0,0,0.2)]'>
          <div className='flex justify-center md:col-span-2'>
            <video controls className='w-full h-auto my-5'>
              <source
                src={VideoBookingProcess}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='text-gray-700 text-justify'>
            <p className='text-gray-700 mb-10 text-lg'>The booking process allows users to select a start and end date for their pet rental, with unavailable dates automatically blocked if the pet is already booked. Once the booking is confirmed, the user is redirected to their Bookings page to view all their active bookings.</p>

            <p className='text-gray-700 font-semibold text-lg'>Key features:</p>
            <ul className='list-disc list-inside space-y-2 text-lg mb-10'>
              <li>Banner with a logo, search bar and log in/sign up options</li>
              <li>Animal listings displaying main information</li>
            </ul>

            <p className='text-gray-700 font-semibold text-lg'>My contribution:</p>
            <ul className='list-disc list-inside space-y-2 text-lg'>
              <li>Created the simple form</li>
              <li>Implemented the datepicker together with a teammate</li>
              <li>Coded the backend logic for handling new bookings and the creation of booking entries</li>
            </ul>
          </div>
        </div>



        <h3 className='text-3xl font-semibold text-gray-700 mb-10 mt-30 text-center'>
          Bookings Page
        </h3>
        <div className='grid grid-cols-1 mx-6 mb-10 p-10 rounded-lg [box-shadow:0_0_15px_rgba(0,0,0,0.2)]'>
          <div className='flex justify-center mb-8'>
            <img
              src={BookingPage1}
              alt="Bookings Page"
              className='w-2/3 h-auto object-contain mr-4'
            />
            <img
              src={BookingPage2}
              alt="Bookings Page"
              className='w-2/3 h-auto object-contain ml-4'
            />
          </div>
          <div className='text-gray-700 justify-center'>
            <p className='text-gray-700 text-lg mb-10'>Once opening the bookings page, the user can view all bookings at one or click on one single booking to see more details and leave a review.</p>
            <p className='text-gray-700 font-semibold text-lg'>Key features:</p>
            <ul className='list-disc list-inside space-y-2 text-lg mb-6'>
              <li>Displays all pets booked by user and from user</li>
              <li>Most important information is immediately visible (booking number, pet's name, price, dates)</li>
            </ul>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4'>
            <div className='flex justify-center items-center'>
              <img
                src={BookingDetails}
                alt="Booking Details Page"
                className='w-full h-auto object-contain'
              />
            </div>
            <div className='text-gray-700 flex flex-col justify-center items-center md:items-start'>
              <div className='max-w-md text-justify'>
                <p className='text-gray-700 font-semibold text-lg text-center md:text-left'>My contribution:</p>
                <ul className='list-disc list-inside space-y-2 text-lg'>
                  <li>Built the backend logic to clearly differentiate bookings between the user's bookings and those of their own pets</li>
                  <li>Coded the logic that users can only add reviews to pets that are not their own</li>
                  <li>Created the CRUD operation to cancel a booking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>



        <h3 className='text-3xl font-semibold text-gray-700 mb-10 mt-30 text-center'>
          Review Page
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 mx-6 mb-10 items-center p-10 pl-15 rounded-lg [box-shadow:0_0_15px_rgba(0,0,0,0.2)]'>
          <div className='text-gray-700 text-justify'>
            <p className='text-gray-700 font-semibold text-lg'>Key features:</p>
            <ul className='list-disc list-inside space-y-2 text-lg'>
              <li>Users can leave a review for pets they have booked, including a written description and a rating from 1 to 10</li>
              <li>The average of all ratings contributes to the pet's overall rating</li>
            </ul>
            <p className='text-gray-700 font-semibold text-lg mt-10'>My contribution:</p>
            <ul className='list-disc list-inside space-y-2 text-lg'>
              <li>Styled and implemented the simple form used throughout the application to ensure consistent and user-friendly form layouts</li>
            </ul>
          </div>
          <div className='flex justify-center md:col-span-2'>
            <img
              src={ReviewPage}
              alt="Review Page"
              className='w-2/3 h-auto object-contain my-5'
            />
          </div>
        </div>



        <h3 className='text-3xl font-semibold text-gray-700 mb-10 mt-30 text-center'>
          Listings Page
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-6 mb-10 p-10 rounded-lg [box-shadow:0_0_15px_rgba(0,0,0,0.2)]">
          <div className="flex justify-center md:col-span-2">
            <img
              src={ListingsPage}
              alt="Listings Page"
              className="w-full max-w-3xl h-auto object-contain mb-20"
            />
          </div>
          <div className="text-gray-700 text-justify flex flex-col justify-center">
            <p className="text-gray-700 font-semibold text-lg">Key features:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Displays the user’s active pet listings with essential details</li>
              <li>Provides options to edit or delete listings</li>
            </ul>
            <p className="text-gray-700 font-semibold text-lg mt-10">My contribution:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Implemented the CRUD functionality for the listings, including creating, updating, and deleting pet listings</li>
            </ul>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:col-span-3 mt-6">
            <div className="flex justify-center order-1 md:order-none">
              <img
                src={EditListing1}
                alt="Edit Listing Page"
                className="w-full max-w-3xl h-auto object-contain"
              />
            </div>
            <div className="flex justify-center order-3 md:order-none">
              <img
                src={CreateListing1}
                alt="Create Listing Page"
                className="w-full max-w-3xl h-auto object-contain"
              />
            </div>
            <div className="flex justify-center order-2 md:order-none">
              <img
                src={EditListing2}
                alt="Edit Listing Page"
                className="w-full max-w-3xl h-auto object-contain"
              />
            </div>
            <div className="flex justify-center order-4 md:order-none">
              <img
                src={CreateListing2}
                alt="Create Listing Page"
                className="w-full max-w-3xl h-auto object-contain"
              />
            </div>
          </div>
        </div>



        <div className='mt-12 max-w-5xl text-justify mb-10 mx-auto' id='wrap-up'>
          <h2 className='text-3xl font-semibold text-gray-700 mb-10 mt-30 text-center'>
            Wrap-Up
          </h2>
          <p className='text-gray-700 mb-10 text-lg'>RentaPet was a rewarding project and exciting learning experience for our entire team, combining creativity and collaboration to bring our idea to life. We utilized tools and technologies like HTML, CSS, JavaScript, SCSS, Tailwind, Bootstrap, and PostgreSQL to build a functional and user-friendly platform. As this was our first project as a team, we honed our skills in pair programming, task delegation and collaborative workflows, which were curcial for staying organized and meeting our goals. Deploying on Heroku presented its own set of challenges of deployment-specific issues we had to debug while staying focused under tight deadlines. This project was a valuable experience that strengthened both our technical expertise and teamwork.</p>
        </div>
      </div>
    </section>
  );
};

export default RentaPet;
