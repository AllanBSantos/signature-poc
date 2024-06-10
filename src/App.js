import './App.css';
import SignatureCanvas from 'react-signature-canvas';
import { useRef, useState } from 'react';

function App() {
  const sigPad = useRef(null);
  const [trimmedDataURL, setTrimmedDataURL] = useState(null);

  const clear = () => {
    sigPad.current.clear();
  };

  const accept = () => {
    if (sigPad.current.isEmpty()) {
      alert("Please provide a signature first.");
    } else {
      const trimmedCanvas = sigPad.current.getTrimmedCanvas().toDataURL('image/png');
      setTrimmedDataURL(trimmedCanvas);
    }
  };

  return (
    <div className="App">
      <p className="Text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis sodales quam vel rutrum. Duis rhoncus libero nunc, sit amet ultrices quam bibendum nec. Quisque egestas ipsum dui, sed accumsan augue eleifend et. Aenean ornare non erat id blandit. Curabitur et sollicitudin nunc. Cras at lorem dignissim enim elementum porttitor quis in sapien. Donec et tempus felis, ac fermentum est. Sed vitae tortor ac mauris luctus hendrerit. Sed varius felis quis elit faucibus gravida. Mauris in consequat metus. Aliquam malesuada sollicitudin ex. Nullam porttitor non nisl nec scelerisque. Proin vel lacinia mauris. Fusce blandit molestie eleifend. Vivamus placerat nisi eu tortor euismod, quis convallis tortor rhoncus.
      </p>
      <SignatureCanvas
        ref={sigPad}
        penColor='green'
        canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
      />
      <div onClick={accept} className="Button">Accept</div>
      <div onClick={clear} className="Button">Reset</div>
      {trimmedDataURL && (
        <div>
          <h2>Trimmed Signature</h2>
          <img src={trimmedDataURL} alt="Trimmed Signature" />
        </div>
      )}
    </div>
  );
}

export default App;
