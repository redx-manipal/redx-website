import "../data/partners";
import { partners } from "../data/partners";

function Partners() {
  console.log(partners);
  return <section id='partners' className='mb-10'>
    <p className="flex items-center text-5xl font-medium m-20">Partners</p>
    <div className="flex justify-center">
      <div className="flex justify-between flex-wrap max-w-4xl gap-10 ">
        {partners.map((partner) => (
          <div>
            <img src={partner.img} alt={partner.name} width={250} className='rounded-2xl' />
          </div>
        ))}
      </div>
    </div>
  </section>;
}

export default Partners;