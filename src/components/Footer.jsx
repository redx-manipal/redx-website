

function Footer() {
    return <footer className="footer flex justify-center items-center h-20 py-10">
      <div className='flex flex-col justify-between items-center h-14'>
          <p className="text-xl">Made with <span className="text-red-600"> &hearts;</span> by <span className='text-red-600 font-bold'> RedX</span></p>
          <p className='flerx text-sm font-medium'>Copyright @{new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  }
  
  export default Footer