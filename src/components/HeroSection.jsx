import Carousel from "./Carousel";

function HeroSection() {
  return (
   <div className="bg-black-800 px-4 py-12 flex lg:flex-row md:flex-col sm:flex-col">
     <div className="w-full pr-4 py-12 px-12">
       <h1 className="text-4xl text-white font-bold mb-4">Redefining</h1>
       <h2 className="text-5xl text-red-600 font-bold mb-4">EXCELLENCE.</h2>
       <p className="text-lg text-gray-300 mb-8">
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       </p>
     </div>
     <div className="w-full lg:w-3/4 md:w-full px-6">
       {/* <img src="him.png" alt="Hero" className="h-full" /> */}
       <Carousel/>
     </div>
   </div>
 );
}

export default HeroSection;