// "use client";
// import Form from "./components/Form";

// function Home() {

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//      <Form />
//     </main>
//   );
// }

// export default Home;

"use client";
import Form from "./components/Form";

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to My App</h1>
        <p className="text-gray-600 mb-6">Fill out the form below to get started!</p>
        <Form />
      </div>
      <footer className="mt-10 text-sm text-gray-200">
        © {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </main>
  );
}

export default Home;
