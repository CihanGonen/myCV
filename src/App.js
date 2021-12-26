import CV from "./cihangonencv.pdf";
function App() {
  return (
    <div className="App">
      <iframe
        id="pdf-js-viewer"
        src={`web/viewer.html?file=${CV}`}
        title="webviewer"
        width="100%"
        height="100vw"
      ></iframe>
    </div>
  );
}

export default App;
