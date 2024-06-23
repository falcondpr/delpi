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
      <div className="bg-[#101010] flex pr-4 items-center justify-between rounded-md h-16 top-1/2 left-5">
        <div className="flex items-center w-full">
          <div>
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
            <div className="h-12 flex-1 ml-2">
              <input
                value={inputValue}
                placeholder={placeholder}
                onChange={(e) =>
                  handleChangeInputValue(e.target.value)
                }
                className="h-full rounded-xl bg-neutral-950 outline-none placeholder:text-white text-white w-16 text-center"
              />
            </div>
          ) : null}
        </div>

        <div className="flex gap-x-3">
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
