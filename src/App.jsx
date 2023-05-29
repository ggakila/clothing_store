function App() {
  

  return (
   <div className="text-white font-lora ">

     {/* main landing page  */}

     <div className="main-page flex flex-col items-center">

      {/* navbar section */}

      <nav className=" container w-full fixed top-0 bg-black ">
        <div className="container mx-auto py-5 px-5 flex justify-between items-center ">
          <div className="flex items-center gap-2 ">
            <img className="w-20 sm:w-60" src="./mncvlogo.png" alt="" />
          </div>
            <ul className="hidden  sm:flex text-l space-x-10  py-5 px-10">
              <li className="hover:bg-white hover:text-black px-20 py-5 rounded-xl hover:shadow-md">Discover</li>
              <li className="hover:bg-white hover:text-black px-20 py-5 rounded-xl hover:shadow-md">Shop</li>
              <li className="hover:bg-white hover:text-black px-20 py-5 rounded-xl hover:shadow-md">About Us</li>
              <li className="hover:bg-white hover:text-black px-20 py-5 rounded-xl hover:shadow-md">Contacts</li>
            </ul>
        </div>
      </nav>

      {/* hero section */}

      <div>
        <div className="relative bg-center bg-contain bg-no-repeat bg-fixed h-screen w-screen ">
          <img className="w-full h-1/2 -z-10 fixed sm:h-screen object-cover " src="../public/man.jpg" alt="" />
          <div className="absolute inset-y-0 right-0 ">
            <h1 className="font-bold text-3xl">Welcome to Mancave Kenya</h1>
            <h3> Design,</h3>
            <h3>Create,</h3>
            <h3>And Consume African</h3>
          </div>
          
        </div>
      </div>
      <div>
      <div className="bg-gray-200 container text-gray-500 h-screen flex flex-col items-center">
            <div className="cards flex items-center">
              <img src="https://images.pexels.com/photos/12513230/pexels-photo-12513230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div>
                <h2>fgsdfgsadfgag</h2>
                <p>Like many savvy fashion bloggers, Maria has expanded her scope to other niches. Today, a visit to Mia Mia Mine will get you home decor, marriage, fitness, travel, and blogging tips. If you’re wondering what fashion pieces to invest in and which ones you can get away with purchasing at a thrift shop, Mia Mia Mine can help you.

</p>
                <button>Shop Jokajok</button>
              </div>
              
            </div>
            </div>
          </div>
      </div>
     </div>
  )
}

export default App
