import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeChars, setIncludeChars] = useState(false);
  const [includeNum, setIncludeNum] = useState(false);
  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const chars = includeChars ? "%$#@^&*!()" : "";
    const nums = includeNum ? "0123456789" : "";

    text += chars;
    text += nums;

    let generated = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * text.length);
      generated += text.charAt(index);
    }

    setPassword(generated);
  }, [setPassword, includeChars, includeNum, length]);

  const copyToClipboard = () => {
    // Select the text in the input field
    passRef.current?.select();
    // Copy the selected text to the clipboard
    document.execCommand('copy');
  };

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="bg-slate-800 w-full h-screen text-white flex items-center justify-center">
      <div className="px-24 py-10 bg-slate-900 rounded-2xl flex flex-col justify-center items-center w-7/12">
        <h1 className="text-3xl mb-5">Password Generator</h1>

        <div className="flex">
          <div className="bg-white rounded-tl-lg rounded-bl-lg p-3 w-96">
            <input
              type="text"
              value={password}
              ref={passRef}
              readOnly
              className="outline-none text-xs text-black w-full"
            />
          </div>
          <button
            onClick={copyToClipboard}
            className="text-xs rounded-tr-lg rounded-br-lg bg-green-500 px-8 hover:bg-green-800 transition duration-300 ease-in-out"
          >
            Copy
          </button>
        </div>

        <div className="flex mt-8 items-start space-x-10 w-7/12 justify-between">
          <div className="flex items-center">
            <input
              type="range"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <span className="text-xs ml-2">Length: {length}</span>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <div className="flex justify-center">
              <input
                type="checkbox"
                checked={includeNum}
                onChange={(e) => {
                  setIncludeNum(e.target.checked);
                  generatePassword();
                }}
              />
              <span className="text-xs ml-2">Numbers</span>
            </div>
            <div className="flex justify-center">
              <input
                type="checkbox"
                checked={includeChars}
                onChange={(e) => {
                  setIncludeChars(e.target.checked);
                  generatePassword();
                }}
              />
              <span className="text-xs ml-2">Characters</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
