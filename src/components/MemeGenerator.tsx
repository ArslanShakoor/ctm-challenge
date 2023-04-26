import { useState } from "react";
import MemeCustomizer from "./MemeCustomizer";
import MemeViewer from "./MemeViewer";
import { isImgUrl } from "../utils/isImageURL";
import { leftRotationImage } from "../utils/leftRotationImage";
import { rightRotationImage } from "../utils/rightRotationImage";
import "../MemeGenerator.css";

function MemeGenerator() {
  const [displayPicker, setDisplayPicker] = useState<boolean>(false);
  const [textColor, setTextColor] = useState<string>("#000000");
  const [rotation, setRotation] = useState<number>(0);
  const [mirrorImage, setMirrorImage] = useState<number>(1);
  const [inputValues, setInputValues] = useState({
    imageURL: "",
    topText: "",
    bottomText: "",
  });
  const [imageError, setImageError] = useState<boolean>(false);

  const handleColorChange = (color: any) => {
    setTextColor(color.hex);
    setDisplayPicker(!displayPicker);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLeftRotation = () => {
    setRotation(leftRotationImage(rotation));
  };

  const handleRightRotation = () => {
    setRotation(rightRotationImage(rotation));
  };

  const handleMirrorImage = () => {
    setMirrorImage(mirrorImage === 1 ? -1 : 1);
  };

  const handleImageBlur = async () => {
    const result = await isImgUrl(inputValues.imageURL);
    if (result) {
      setImageError(false);
    } else {
      setImageError(true);
    }
  };

  const handleDisplayPicker = () => {
    setDisplayPicker(!displayPicker);
  };

  return (
    <div className="container">
      <header>
        <h1>MEME GENERATOR</h1>
      </header>
      <div className="floatChild">
        <div>
          <input
            className="textInput"
            name="imageURL"
            type="url"
            placeholder="Enter Image URL"
            onChange={handleTextChange}
            onBlur={handleImageBlur}
          />
          {imageError && (
            <p className="errorMessage">Please enter a valid URL</p>
          )}
        </div>

        <input
          className="textInput"
          name="topText"
          type="text"
          placeholder="Enter Top Text"
          onChange={handleTextChange}
        />

        <input
          className="textInput"
          name="bottomText"
          type="text"
          placeholder="Enter Bottom Text"
          onChange={handleTextChange}
        />

        <MemeCustomizer
          handleColorChange={handleColorChange}
          handleLeftRotation={handleLeftRotation}
          handleRightRotation={handleRightRotation}
          handleMirrorImage={handleMirrorImage}
          handleDisplayPicker={handleDisplayPicker}
          textColor={textColor}
          displayPicker={displayPicker}
        />
      </div>
      <MemeViewer
        rotation={rotation}
        mirrorImage={mirrorImage}
        imageError={imageError}
        inputValues={inputValues}
        textColor={textColor}
      />
    </div>
  );
}

export default MemeGenerator;
