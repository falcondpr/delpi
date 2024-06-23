import { Clipboard, SendHorizonal } from "lucide-react";
import { ENDPOINT_API } from "../shared/constants";

interface SearchProps {
  text: string;
  handleCopy: () => void;
  handleSearch: () => void;
  placeholder?: string;
  inputValue?: string;
  handleChangeInputValue?: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({
  handleCopy,
  handleSearch,
  text,
  inputValue,
  placeholder,
  handleChangeInputValue,
}) => {
  return (
    <div className="relative mt-5">
      <div className="bg-[#101010] flex items-center rounded-md h-16 top-1/2 left-5">
        <div className="flex items-center w-full">
          <div className="">
            <p
              className="text-lg text-neutral-500 pl-5"
              id="urlEndpoint"
            >
              {ENDPOINT_API}
              {text}
            </p>
          </div>

          {typeof inputValue === "string" &&
          handleChangeInputValue ? (
            <div className="h-16 flex-1">
              <input
                value={inputValue}
                placeholder={placeholder}
                onChange={(e) =>
                  handleChangeInputValue(e.target.value)
                }
                className="h-full pl-2 bg-[#101010] outline-none placeholder:text-white text-white w-full"
              />
            </div>
          ) : null}
        </div>

        <div className="flex gap-x-3 absolute right-5 top-1/2 -translate-y-1/2">
          <button
            type="button"
            className="h-auto rounded-sm ring-1 p-2 ring-neutral-600 text-white"
            onClick={handleCopy}
          >
            <Clipboard className="text-neutral-300 text-2xl" />
          </button>
          {typeof inputValue === "string" && (
            <button
              type="button"
              className="h-auto rounded-sm ring-1 p-2 ring-neutral-600 text-white"
              onClick={handleSearch}
            >
              <SendHorizonal className="text-neutral-300 text-2xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
