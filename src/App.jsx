import './App.css'
import BooksList from './Components/BooksArea/BooksArea'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <BooksList />
      <Footer />
    </>
  )
}

export default App

// ✓ আমাদের দেয়া HTML টেমপ্লেট কে রিয়্যাক্টে কনভার্ট করতে হবে ।

// ✓ আপনাকে বেশ কিছু বই এর লিস্ট দেখাতে হবে । সেক্ষেত্রে কোন API ব্যবহার করা যাবে না ।

// ✓ সার্চ বার এ বই এর নাম লিখে সার্চ করলে, শুধু মাত্র ঐ কী-ওয়ার্ড দিয়ে যেই যেই বই গুলো আছে সেগুলো দেখাবে । বই এর নাম সার্চের ক্ষেত্রে কোন প্রকার Case Sensitiveness থাকবে না ।

// ✓ বই গুলো নাম এবং পাবলিশ এর সালের উপর ভিত্তি করে Sort করা যাবে । Sort করার জন্যে বই এর লিস্টের উপরে ডান পাশে Dropdown আছে, সেটি পরিবর্তন করলেই বই গুলো Sort করবে । আপাতত আপনারা বই এর কার্ড গুলোতে পাবলিশ এর সাল দেখতে পারবেন না । তবে আপনারা চাইলে নামের পাশে সাল উল্লেখ করতে পারেন । যেমনঃ "সহজ ভাষায় জাভাস্ক্রিপ্ট (২০২৩)" - এভাবে

// ✓ যেকোনো বই, ইউজার চাইলে সেটি তার Favorite হিসেবে সিলেক্ট করতে পারে । Add to Cart বাটনের পাশে Favorite বাটন আছে । কোন বই আগে থেকে Favorite হিসেবে থাকলে সেটি Unfavourite হবে ।
