import Image from 'next/image';


const Homepage = () => {
  
  return(
    <div className="h-full lg:flex flex-c">
      <div className="h-1/2 relative lg:h-full lg:w-1/2" >
          <Image src="/hero.png" alt="" fill  className="object-contain"/>
      </div>

      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
        <h1 className="text-4xl font-bold">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy</p>
        <div className="flex gap-4">
          <button className='p-4 rounded-lg ring-1 rigng-bg-black bg-black text-white'>View My Work</button>
          <button className='p-4 rounded-lg ring-1 rigng-bg-black bg-black text-white'>Contact Me</button>
        </div>
      </div>
    </div>
  ) 
};

export default Homepage;
