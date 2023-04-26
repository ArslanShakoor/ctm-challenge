import { CompactPicker } from "react-color";
import ImageMirror from "./ImageMirror";
import ImageRotation from "./ImageRotation";

interface props {
  handleColorChange: any;
  handleLeftRotation: () => void;
  handleRightRotation: () => void;
  handleMirrorImage: () => void;
  handleDisplayPicker: () => void;
  textColor: string;
  displayPicker: boolean;
}

function MemeCustomizer({
  handleColorChange,
  handleLeftRotation,
  handleRightRotation,
  handleMirrorImage,
  handleDisplayPicker,
  textColor,
  displayPicker,
}: props) {
  return (
    <div>
      <div className="customizeSection">
        <div
          className="selectedColor"
          style={{ backgroundColor: textColor }}
          onClick={handleDisplayPicker}
        ></div>
        <ImageRotation
          handleLeftRotation={handleLeftRotation}
          handleRightRotation={handleRightRotation}
        />
        <ImageMirror handleMirrorImage={handleMirrorImage} />
      </div>
      {displayPicker && (
        <div>
          <CompactPicker onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
}

export default MemeCustomizer;
