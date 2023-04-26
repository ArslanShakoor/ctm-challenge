import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";

interface props {
  handleMirrorImage: () => void;
}

function ImageMirror({ handleMirrorImage }: props) {
  return (
    <div className="imageMirror" onClick={handleMirrorImage}>
      <FontAwesomeIcon icon={faRightLeft} />
    </div>
  );
}

export default ImageMirror;
