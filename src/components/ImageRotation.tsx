import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faRotateRight } from "@fortawesome/free-solid-svg-icons";

interface props {
  handleLeftRotation: () => void;
  handleRightRotation: () => void;
}

function ImageRotation({ handleLeftRotation, handleRightRotation }: props) {
  return (
    <div>
      <div className="fontRotateIcons" onClick={() => handleLeftRotation()}>
        <FontAwesomeIcon icon={faRotateLeft} />
      </div>
      <div className="fontRotateIcons" onClick={() => handleRightRotation()}>
        <FontAwesomeIcon icon={faRotateRight} />
      </div>
    </div>
  );
}

export default ImageRotation;
