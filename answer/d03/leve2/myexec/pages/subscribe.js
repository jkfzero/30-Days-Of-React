export default function Subscribe() {
  return (
    <div className="container rounded-lg m-6 p-24 bg-sky-500">
      <h1 className="text-center text-xl  ">{"Subscribe".toLocaleUpperCase()}</h1>
      <p className="text-center my-6"> Sign Up</p>
      <div className="grid grid-cols-3 gap-4">
        <input className="rounded-md shadow-md p-2 flex" type="text" placeholder="First Name" />
        <input className="rounded-md shadow-md p-2 flex" type="text" placeholder="Last Name" />
        <input className="rounded-md shadow-md p-2 flex" type="text" placeholder="Email" />
      </div>
      <button className="block mt-8 rounded bg-orange-700 text-white px-4 py-3 mx-auto">Subscribe</button>
    </div>
  );  
}