import React from "react";

const App = () => {
  const authFunc = async () => {
    const authData = { data: "Auth on my site" };
    const WavesKeeper = window.WavesKeeper;
    if (WavesKeeper) {
      try {
        const auth = await WavesKeeper.auth(authData);
        console.log(auth); //displaying the result on the console
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("To Auth WavesKeeper should be installed.");
    }
  };
  return (
    <div className="container">
      <input
        className="btn btn-primary"
        type="submit"
        value="Auth"
        onClick={authFunc}
      />
    </div>
  );
};
export default App;
