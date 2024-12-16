import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

function App() {
  return (
    <div>
      <FileUploaderRegular
        sourceList="local, gdrive, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey="685f50edc277b5811ba6"
      />
    </div>
  );
}

export default App;
