import emptyImage from "../images/empty-image.jpeg";

interface props {
  rotation: number;
  mirrorImage: number;
  imageError: boolean;
  inputValues: any;
  textColor: string;
}
function MemeViewer({
  rotation,
  mirrorImage,
  imageError,
  inputValues,
  textColor,
}: props) {
  return (
    <div className="floatChild">
      <img
        style={{
          transform: `rotate(${rotation}deg) scaleX(${mirrorImage})`,
        }}
        className="memeImg"
        src={
          imageError || !inputValues.imageURL
            ? emptyImage
            : inputValues.imageURL
        }
        alt="Meme"
      />
      <div className="topText" style={{ color: textColor }}>
        {inputValues.topText}
      </div>
      <div className="bottomText" style={{ color: textColor }}>
        {inputValues.bottomText}
      </div>
    </div>
  );
}
export default MemeViewer;
