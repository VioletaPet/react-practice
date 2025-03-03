import React, { useEffect } from 'react';
import StreamCaddyThumbnail from "../../assets/StreamCaddyThumbnail.png";
import TinderGame from "../../assets/streamcaddy/tindergame.png";
import BrowsePage from "../../assets/streamcaddy/browsepage.png";
import FilteredBrowsePage from "../../assets/streamcaddy/filteredpage.png";
import MediaShowPage1 from "../../assets/streamcaddy/showpage1.png";
import MediaShowPage2 from "../../assets/streamcaddy/showpage2.png";
import ProfilePage from "../../assets/streamcaddy/profilepage.png";
import UserWatchlist from "../../assets/streamcaddy/watchlist.png";

import VideoShowPage from "../../assets/videos/streamcaddy/showvideo.mp4";
import VideoEditingProviders from "../../assets/videos/streamcaddy/editingproviders.mp4";
import VideoGeneratingSchedule from "../../assets/videos/streamcaddy/generatingschedule.mp4";

export const StreamCaddy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 mt-10">
      <img
        src={StreamCaddyThumbnail}
        alt="StreamCaddy Thumbnail"
        className="w-48 h-48 md:w-48 md:h-48 mx-auto mb-6 rounded-full shadow-lg"
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent text-center">
        StreamCaddy
      </h1>
      <p className="text-gray-600 text-xl text-center max-w-2xl">
        StreamCaddy was my team's final project at the Le Wagon Bootcamp, where we applied all the skills we acquired over three months!
      </p>

      <div className="mt-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {["HTML", "CSS", "JavaScript", "Ruby on Rails", "PostgreSQL", "Bootstrap", "SASS", "Heroku", "Cloudinary", "TMDB API"].map((tech) => (
            <span key={tech} className="border-2 border-gray-400 px-4 py-2 text-gray-700 font-semibold rounded-lg text-center hover:border-orange-400">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <span className='mt-5 flex gap-3'>
      <a
        href="https://github.com/VioletaPet/StreamCaddy"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 px-6 py-3 text-white bg-gradient-to-r from-yellow-500 to-orange-400 hover:from-yellow-600 hover:to-orange-500 hover:scale-105 transition-all duration-300 rounded-full shadow-md"
      >
        View Code
      </a>

      <a
        href="https://www.youtube.com/watch?v=Fpj2z70Srl8"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 px-6 py-3 text-white bg-gradient-to-r from-yellow-500 to-orange-400 hover:from-yellow-600 hover:to-orange-500 hover:scale-105 transition-all duration-300 rounded-full shadow-md"
      >
        Watch Demo
      </a>
      </span>

      <div className='grid grid-cols-2 md:grid-cols-2 gap-10 mt-10 mb-10 max-w-7xl'>
        <div className="mt-12 max-w-3xl text-justify" id='implementation'>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Implementation
          </h2>
          <p className="text-gray-600 text-lg">StreamCaddy was built through effective teamwork and robust project management practices. We used Zoom for real-time communication and pair programming, Slack for sharing codes and notes and Trello to track tasks and progress. The TMDB API was central to providing up-to-date information on movies and TV shows, ensuring a rich browsing and watchlist experience. By combining these tools with our development skills, we created a cohesive and user-centric application that addresses a real-world need for streamers.</p>
        </div>

        <div className="mt-12 max-w-3xl text-justify" id='collaboration'>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4 center">
            Team Collaboration
          </h2>
          <p className="text-gray-600 text-lg">Our team worked collaboratively to build the foundational structure of StreamCaddy. Together, we constructed the routes, models, and controllers, ensuring a robust and well-integrated backend. Additionally, we explored the TMDB API as a team to pinpoint the specific endpoints needed for our application. This joint effort allowed everyone to gain a solid understanding of the complex core of the application, fostering better collaboration and enabling us to tackle subsequent development tasks with confidence and clarity.</p>
        </div>

        <div className="mt-12 max-w-3xl text-justify" id='key-features'>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Key Features
          </h2>
          <ul className="text-gray-600 text-justify list-disc list-inside space-y-1 text-lg">
            <li>A fun Tinder-style game to capture user preferences, adding selected movies and TV shows to their watchlist.</li>
            <li className='mb-5'>Powered by the TMDB API to provide rich and up-to-date data on movies and TV shows.</li>
            <li className='mb-5'>Browsing capabilities for movies and TV shows, with detailed information such as synopses, seasons, cast, and reviews.</li>
            <li className='mb-5'>Personalized subscription management, allowing users to specify their current streaming platforms and decide how many they want to cancel or keep.</li>
            <li className='mb-5'>A dynamic watchlist schedule that recommends which platforms to subscribe to and when, ensuring cost savings and efficient viewing.</li>
          </ul>
        </div>

        <div className="mt-12 max-w-3xl text-justify" id='challenges'>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Challenges
          </h2>
          <ul className='text-gray-600 text-justify list-disc list-inside space-y-1 text-lg'>
            <li className='mb-5'>Handling the vast amount of data from the TMDB API</li>
            <li className='mb-5'>Identifying and using the correct endpoints to fetch necessary information</li>
            <li className='mb-5'>Keeping an overview of the database consisting of 16 interconnected models, requiring careful planning for seamless integration and efficient data retrievel</li>
            <li className='mb-5'>Navigating relationships between models</li>
            <li className='mb-5'>First-time use of Cloudinary, integrating it wirh Active Storage to upload and host images</li>
            <li className='mb-5'>Generating the personalized subscription schedule, aligning with the user watchlist</li>
            <li className='mb-5'>Debugging and sticking to the deadline in two weeks time</li>
          </ul>
        </div>
      </div>

      <div className='mt-12 max-w-5xl text-justify mb-10' id='contributions'>
        <h2 className='text-3xl font-semibold text-gray-700 mb-4'>
          My Contributions
        </h2>
        <ul className='text-gray-600 text-justify list-disc list-inside space-y-1  text-lg'>
          <li className='mb-5'><strong>Developed the Media Show Page:</strong> Took ownership of both the backend and frontend for this page, including the logic to fetch and display data (e.g., episodes, seasons, cast, and synopsis) from the TMDB API</li>
          <li className='mb-5'><strong>Designed Frontend Layout:</strong> Crafted an intuitive and visually appealing user interface with easy-to-navigate tabs, a backdrop gallery, and dynamic elements like genre displays and streaming provider logos</li>
          <li className='mb-5'><strong>Implemented CRUD Operations:</strong> Developed the backend logic to handle data flow and ensure smooth integration between the database and the media show page</li>
          <li className='mb-5'><strong>Contributed to Profile Page:</strong> Focused on the accurate display of streaming provider logos and contributed to the smooth user experience on the profile page</li>
          <li className='mb-5'><strong>Backend Development for Editing Providers:</strong> Built CRUD operations for managing users' streaming provider preferences, ensuring the efficient handling of user data</li>
          <li className='mb-5'><strong>Personalized Schedule Feature:</strong> Implemented both the frontend and backend for generating a dynamic, monthly schedule to optimize users’ streaming subscriptions based on their watchlist</li>
          <li className='mb-5'><strong>Collaborative Teamwork:</strong> Worked closely with teammates to develop core features, troubleshoot challenges, and deliver a functional, cohesive product</li>
        </ul>
      </div>

      <div className='mt-12 max-w-7xl text-justify mb-10'>
        <h2 className='text-4xl font-semibold text-gray-700 mb-4 text-center'>
          Project Deep Dive
        </h2>



        <h3 className='text-3xl font-semibold text-gray-700 my-10 text-center'>
          Tinder Game
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 mb-10 items-center p-10 rounded-lg [box-shadow:0_0_15px_rgba(0,0,0,0.2)]'>
          <div className='flex justify-center'>
            <img
              src={TinderGame}
              alt="Tinder Game"
              className='w-full max-w-xs md:max-w-sm h-auto object-contain'
            />
          </div>
          <div className='text-gray-700 text-left'>
            <ul className='list-disc list-inside space-y-2 text-lg text-justify'>
              <li>Dynamic and interactive feature allowing users to swipe through a selection of movies and TV shows, choosing their preferences</li>
              <li>Designed to be engaging and fun, creating an enjoyable experience and introducing users to new media</li>
              <li>Preferences are saved to the user's watchlist, forming the foundation for their customized viewing recommendations</li>
              <li>Developed by a teammate, combining ccreativity and technical expertise to craft a seamless and enjoyable discovery tool for users</li>
            </ul>
          </div>
        </div>



        <h3 className='text-3xl font-semibold text-gray-700 mb-10 mt-30 text-center'>
          Browsing Page
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 mb-10 items-center p-10 rounded-lg [box-shadow:0_0_15px_rgba(0,0,0,0.2)]'>
          <div className='text-gray-700 text-left'>
            <ul className='list-disc list-inside space-y-2 text-lg text-justify'>
              <li>Central hub for browsing a vast selection of movies and TV shows</li>
              <li>Media are showcased with their posters and titles, all dynamically fetched from the TMDB API</li>
              <li>Option to add media to watchlist through the "+" button</li>
              <li>Displayed streaming platforms subscribed by the user next to filter options, providing a quick overview of active services</li>
              <li>Users can easily scroll through and explore available media</li>
            </ul>
          </div>
          <div className='flex justify-center'>
            <img
              src={BrowsePage}
              alt="Browsing Page"
              className='w-full max-w-xs md:max-w-sm h-auto object-contain'
            />
          </div>
        </div>



        <h3 className='text-3xl font-semibold text-gray-700 mb-10 mt-30 text-center'>
          Filtered Browsing Page
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 mb-10 items-center p-10 rounded-lg [box-shadow:0_0_15px_rgba(0,0,0,0.2)]'>
          <div className='flex justify-center'>
            <img
              src={FilteredBrowsePage}
              alt="Filtered Browsing Page"
              className='w-full max-w-xs md:max-w-sm h-auto object-contain'
            />
          </div>
          <div className='text-gray-700 text-left'>
            <ul className='list-disc list-inside space-y-2 text-lg text-justify'>
              <li>Possibility to streamline browsing experience and focus on content that matches the user's interests</li>
              <li>This feature highlights the personalized nature of the application, ensuring users can afficiently find and access media they love</li>
              <li>Developed by my teammates, this page showcases their expertise in designing and implementing intuitive and user-friendly browsing and filtering functionalities</li>
            </ul>
          </div>
        </div>



        <h3 className='text-3xl font-semibold text-gray-700 mb-10 mt-30 text-center'>
          Media Show Page
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 mb-10 items-center p-10 rounded-lg [box-shadow:0_0_15px_rgba(0,0,0,0.2)]'>
          <div className='flex justify-center'>
            <img
              src={MediaShowPage1}
              alt="Media Show Page"
              className='w-full max-w-xs md:max-w-sm h-auto object-contain'
            />
          </div>
          <div className='flex justify-center'>
            <img
              src={MediaShowPage2}
              alt="Media Show Page"
              className='w-full max-w-xs md:max-w-sm h-auto object-contain'
            />
          </div>
          <div className='text-gray-700 text-left'>
            <ul className='list-disc list-inside space-y-2 text-lg text-justify'>
              <li>Essential information displayed on the very first page gives users a clear understanding of the media at a glance</li>
              <li>The media's poster is prominently displayed, with a tab navigation bar allowing users easy access different sections such as synopsis, cast, reviews and seasons for TV show</li>
              <li>To indicate where the media can be watched, the streaming provider's logo is displayed in the top right corner of the poster</li>
              <li>A backdrop showcases a gallery of images from the media, offering an additional layer of immersion</li>
            </ul>
          </div>
          <div className='flex justify-center mt-10'>
            <video controls className='w-full max-w-xs md:max-w-sm h-auto'>
              <source
                src={VideoShowPage}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='col-span-1 md:col-span-2 w-full text-gray-700 text-justify mt-10'>
            <div className='text-gray-700 text-justify'>
              <p className='text-gray-700 text-lg font-semibold'>My contributions:</p>
              <ul className='list-disc list-inside space-y-2 text-lg text-justify'>
                <li>Sole responsibility for the complete development of the media show page, on the backend as well as frontend</li>
                <li>Wrote the logic to fetch all the displayed data from the TMDB API, ensuring accurate and efficient integration of the vast dataset</li>
                <li>Implemented the CRUD operations required for this page, enabling seamless data handling</li>
                <li>Created an intuitive and visually appealing layout with the tab navigation and backdrop gallery</li>
                <li>Coded the dynamic display of the streaming provider's logo </li>
              </ul>
            </div>
          </div>
        </div>



        <h3 className='text-3xl font-semibold text-gray-700 mb-10 mt-30 text-center'>
          Profile Page
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 mb-10 items-center p-10 rounded-lg [box-shadow:0_0_15px_rgba(0,0,0,0.2)]'>
          <div className='flex justify-center'>
            <img
              src={ProfilePage}
              alt="Profile Page"
              className='w-full max-w-xs md:max-w-sm h-auto object-contain'
            />
          </div>
          <div className='text-gray-700 text-left'>
            <p className='text-gray-700 text-lg mb-10 text-justify'>This page acts as the user's personal dashboard, consolidating essential information related to their streaming preferences and subscription management</p>
            <ul className='list-disc list-inside space-y-2 text-lg text-justify'>
              <li>Showcases the user's profile picture, username and logos of streaming platforms currently subscribed</li>
              <li>Easy access to the user's watchlist and streaming platforms for adjustments</li>
            </ul>
          </div>
          <div className='col-span-1 md:col-span-2 w-full text-gray-700 text-justify mt-10'>
            <div className='text-gray-700 text-justify'>
              <p className='text-gray-700 text-lg font-semibold'>My contributions:</p>
              <ul className='list-disc list-inside space-y-2 text-lg'>
                <li>Primarily focused on ensuring the accurate display of the logos for each subscribed streaming provider</li>
              </ul>
            </div>
          </div>
        </div>



        <h3 className='text-3xl font-semibold text-gray-700 mb-10 mt-30 text-center'>
          User Watchlist
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 mb-10 items-center p-10 rounded-lg [box-shadow:0_0_15px_rgba(0,0,0,0.2)]'>
          <div className='text-gray-700 text-left'>
            <p className='text-gray-700 mb-10 text-lg text-justify'>The watchlist is designed to highlight the user's curated list of movies and TV shows that are generated either through the Tinder-style game or by browsing.</p>
            <ul className='list-disc list-inside space-y-2 text-lg text-justify'>
              <li>Organized content based on user's preferences</li>
              <li>Allows the users to maanage the movies and TV shows they have saved to watch later</li>
              <li>Logic developed by a teammate who also designed the layout with intuitive buttons for deleting media and adding revies</li>
            </ul>
          </div>
          <div className='flex justify-center'>
            <img
              src={UserWatchlist}
              alt="User Watchlist"
              className='w-full max-w-xs md:max-w-sm h-auto object-contain'
            />
          </div>
        </div>



        <h3 className='text-3xl font-semibold text-gray-700 mb-10 mt-30 text-center'>
          Editing Streaming Providers
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 mb-10 items-center p-10 rounded-lg [box-shadow:0_0_15px_rgba(0,0,0,0.2)]'>
          <div className='flex justify-center'>
            <video controls className='w-full max-w-xs md:max-w-sm h-auto'>
              <source
                src={VideoEditingProviders}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='text-gray-700 text-left'>
            <p className='text-gray-700 mb-10 text-lg text-justify'>This video showcases how users can edit their streaming providers via an intuitive interface they can access through their profile</p>
            <ul className='list-disc list-inside space-y-2 text-lg text-justify'>
              <li>By tapping on the provider logos, users can select or deselect the platforms</li>
              <li>Once the providers are changed, both the profile page and the browse main page are automatically updated to reflect the changes</li>
            </ul>
          </div>
        </div>



        <h3 className='text-3xl font-semibold text-gray-700 mb-10 mt-30 text-center'>
          Generating Personalized Schedule
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 mb-10 items-center p-10 rounded-lg [box-shadow:0_0_15px_rgba(0,0,0,0.2)]'>
          <div className='text-gray-700 text-left'>
            <p className='text-gray-700 mb-10 text-lg text-justify'>This video demonstrates how users can generate monthly personalized schedules based on the media in their watchlist</p>
            <ul className='list-disc list-inside space-y-2 text-lg text-justify'>
              <li>The key function of this feature is to help users determine which streaming platforms they should keep, cancle or subscribe in order to watch the content in their watchlist</li>
            </ul>
            <p className='text-gray-700 mt-10 text-lg font-semibold'>My contributions:</p>
            <ul className='list-disc list-inside space-y-2 text-lg text-justify'>
              <li>Frontend: Designed the overall layout for the overall schedule as well as the display for each month's schedule</li>
              <li>Backend: Built the logic that automatically sorts the streaming provider logos into the categories keep, cancel or subscribe</li>
            </ul>
          </div>
          <div className='flex justify-center'>
            <video controls className='w-full max-w-xs md:max-w-sm h-auto'>
              <source
                src={VideoGeneratingSchedule}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>



        <div className='mt-12 max-w-5xl text-justify mb-10 mx-auto' id='wrap-up'>
          <h2 className='text-3xl font-semibold text-gray-700 mb-10 mt-30 text-center'>
            Wrap-Up
          </h2>
          <p className='text-gray-700 mb-10 text-lg'>StreamCaddy marked our second collaborative project as a team, completed within a two-week timeframe. Over this period, we saw significant progress in both our technical abilities and teamwork, particularly when compared to our first project, RentaPet. The project was structured into two focused phases: the first week dedicated to backend development, where we honed our skills in API integration and data modeling, and the second week focused on frontend development, where we applied our growing expertise in creating intuitive, user-friendly interfaces. Through consistent communication using tools like Slack, Zoom, and Trello, we maintained a well-organized workflow, which was essential for efficiently overcoming the challenges that arose. The experience reinforced the importance of collaboration, problem-solving, and adaptability. StreamCaddy stands as a reflection of our continuous improvement as a team. We are proud of the results achieved, particularly in user experience design and technical integration, and we look forward to applying the lessons learned in future projects.</p>
        </div>
      </div>
    </section>
  );
};

export default StreamCaddy;
