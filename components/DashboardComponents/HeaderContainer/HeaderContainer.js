"use client";

import { Inter } from "next/font/google";
import { useState, useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

const TITLE_DEFAULT = "12 Weeks Goals";
const QUOTE_DEFAULT =
  "In just 12 weeks, you can create a new habit that will last a lifetime.";
const HEADER_DEFAULT =
  "Enter URL that you want to set as the header background";

const HeaderContainer = () => {
  const [title, setTitle] = useState(TITLE_DEFAULT);
  const [quote, setQuote] = useState(QUOTE_DEFAULT);
  const [isHeader, setIsHeader] = useState(false);
  const [headerImage, setHeaderImage] = useState(HEADER_DEFAULT);

  const headerRef = useRef(null);

  const handleBackgroundImageChange = () => {
  };

  const handleValueChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleEnterOrBlur = (e, setValue, defaultValue) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setValue(inputValue === "" ? defaultValue : inputValue);
    setIsHeader(false);
  };

  const handleClickOutside = (e) => {
    if (headerRef.current && !headerRef.current.contains(e.target)) {
      setIsHeader(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    handleBackgroundImageChange();
  }, [headerImage])

  useEffect(() => {}, [title, quote, headerImage]);

  return (
    <div
      ref={headerRef}
      onClick={() => setIsHeader(true)}
      className={`flex items-end bg-neutral-200 w-full h-60 rounded-t-lg hover:cursor-pointer`}
    >
      <form className="flex flex-col w-full pl-[5%] mb-2">
        {isHeader && (
          <input
            type="text"
            onChange={(e) => handleValueChange(e, setHeaderImage)}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              handleEnterOrBlur(e, setHeaderImage, HEADER_DEFAULT)
            }
            onBlur={(e) =>
              e.type === "blur" &&
              handleEnterOrBlur(e, setHeaderImage, HEADER_DEFAULT)
            }
            className="text-black text-2xl texl-2xl w-2/3 border-none bg-transparent focus:border-none outline-none"
            value={headerImage}
          />
        )}

        <input
          type="text"
          className={`${inter.className} underline h-16 w-full text-black font-semibold text-4xl border-none bg-transparent focus:border-none outline-none placeholder:text-black placeholder:font-semibold`}
          value={title}
          onChange={(e) => handleValueChange(e, setTitle)}
          onKeyDown={(e) =>
            e.key === "Enter" && handleEnterOrBlur(e, setTitle, TITLE_DEFAULT)
          }
          onBlur={(e) =>
            e.type === "blur" && handleEnterOrBlur(e, setTitle, TITLE_DEFAULT)
          }
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
