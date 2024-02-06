"use client";

import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const TITLE_DEFAULT = "12 Weeks Goals";
const QUOTE_DEFAULT =
  "In just 12 weeks, you can create a new habit that will last a lifetime.";

const HeaderContainer = () => {
  const [title, setTitle] = useState(TITLE_DEFAULT);
  const [quote, setQuote] = useState(QUOTE_DEFAULT);

  // User presses on the background, give user option to change image
  const handleBackgroundImageChange = () => {};

  // Handle when user is inputting characters
  const handleValueChange = (e, setValue) => {
    setValue(e.target.value);
  };

  // User presses enter or clicks off title/quote, set value to last inputted value
  const handleEnterOrBlur = (e, setValue, defaultValue) => {
      e.preventDefault();
      const inputValue = e.target.value;

      // If input is an empty string, set the default value
      setValue(inputValue === "" ? defaultValue : inputValue);

      e.target.blur();
  };

  // Update title or quote on enter/onblur 
  useEffect(() => {}, [title, quote]);

  return (
    <div className="flex items-end bg-red-200 w-full h-[25%] rounded-t-lg hover:cursor-pointer">
      <form className="flex flex-col w-full pl-[5%]">
        <input
          type="text"
          className={`${inter.className} underline h-16 w-full text-black font-semibold text-4xl border-none bg-transparent focus:border-none outline-none placeholder:text-black placeholder:font-semibold`}
          value={title}
          onChange={(e) => handleValueChange(e, setTitle)}
          onKeyDown={(e) =>
            e.key === "Enter" && handleEnterOrBlur(e, setTitle, TITLE_DEFAULT)
          }
          onBlur={(e) => handleEnterOrBlur(e, setTitle, TITLE_DEFAULT)}
        />
        <input
          type="text"
          className={`ml-[2%] ${inter.className} italic h-8 w-full text-black text-xl border-none bg-transparent focus:border-none outline-none placeholder:text-black placeholder:font-semibold`}
          value={quote}
          onChange={(e) => handleValueChange(e, setQuote)}
          onKeyDown={(e) =>
            e.key === "Enter" && handleEnterOrBlur(e, setQuote, QUOTE_DEFAULT)
          }
          onBlur={(e) =>
            e.type === "blur" && handleEnterOrBlur(e, setQuote, QUOTE_DEFAULT)
          }
        />
      </form>
    </div>
  );
};

export default HeaderContainer;
