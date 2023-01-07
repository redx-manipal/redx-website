import { team } from "../data/team";
import { RiLinkedinFill, RiInstagramLine, RiGithubFill } from "react-icons/ri";
import "../styles/team.scss";

function Team() {
  var threeIndividual = team.slice(0, 3);
  var fiveIndividualOne = team.slice(3, 8);
  var fiveIndividualTwo = team.slice(8, 13);
  return <section id='team'>
    <p className="flex items-center text-5xl font-medium m-20">Team</p>
     <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-between ">
        <div className="grid lg:grid:3 md:grid-cols-3 sm:grid-cols-1">
          {threeIndividual.map((individual, id) => (
            <div key={id} className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center">
                <img
                  src={individual.img}
                  alt="profile"
                  className="h-24 w-24 rounded-full object-cover"
                />
                <p className='font-semibold'>{individual.name}</p>
                <p className="text-sm text-red-600">{individual.position}</p>
                <div className="flex socials justify-center text-md">
                    {individual.socials.linkedin?<a href={individual.socials.instagram} target="_blank" rel="noreferrer"><RiLinkedinFill  /> </a>:""}
                    {individual.socials.instagram?<a href={individual.socials.linkedin} target="_blank" rel="noreferrer"><RiInstagramLine className="mx-2"/></a>:""}
                    {individual.socials.github?<a href={individual.socials.github} target="_blank" rel="noreferrer"><RiGithubFill /></a>:""}            
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid:5 md:grid-cols-5 sm:grid-cols-1 mt-10">
          {fiveIndividualOne.map((individual, id) => (
            <div key={id} className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <img
                src={individual.img}
                alt="profile"
                className="h-24 w-24 rounded-full object-cover"
              />
              <p className='font-semibold'>{individual.name}</p>
              <p className="text-sm text-red-600">{individual.position}</p>
              <div className="flex socials justify-center text-md">
                  {individual.socials.linkedin?<a href={individual.socials.instagram} target="_blank" rel="noreferrer"><RiLinkedinFill  /> </a>:""}
                  {individual.socials.instagram?<a href={individual.socials.linkedin} target="_blank" rel="noreferrer"><RiInstagramLine className="mx-2"/></a>:""}
                  {individual.socials.github?<a href={individual.socials.github} target="_blank" rel="noreferrer"><RiGithubFill /></a>:""}            
              </div>
            </div>
          </div>
          ))}
        </div>

        <div className="grid lg:grid:5 md:grid-cols-5 sm:grid-cols-1 mt-10">
          {fiveIndividualTwo.map((individual, id) => (
           <div key={id} className="flex flex-col items-center justify-center">
           <div className="flex flex-col items-center px-4">
             <img
               src={individual.img}
               alt="profile"
               className="h-24 w-24 rounded-full object-cover"
             />
             <p className='font-semibold'>{individual.name}</p>
             <p className="text-sm text-red-600">{individual.position}</p>
             <div className="flex socials justify-center text-md">
                 {individual.socials.linkedin?<a href={individual.socials.instagram} target="_blank" rel="noreferrer"><RiLinkedinFill  /> </a>:""}
                 {individual.socials.instagram?<a href={individual.socials.linkedin} target="_blank" rel="noreferrer"><RiInstagramLine className="mx-2"/></a>:""}
                 {individual.socials.github?<a href={individual.socials.github} target="_blank" rel="noreferrer"><RiGithubFill /></a>:""}            
             </div>
           </div>
         </div>
          ))}
        </div>
      </div>
    </div>
  </section>;
}

export default Team;
