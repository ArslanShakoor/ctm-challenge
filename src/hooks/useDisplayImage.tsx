/*
we are not using this custom hook right now
in future if we need to upload image from our local
machine we can use this custom hook
*/
import { useState } from "react";
function useDisplayImage() {
  const [result, setResult] = useState<string>("");

  function uploader(e: any) {
    const imageFile = e.target.files && e.target.files[0];
    setResult(URL.createObjectURL(e.target.files && e.target.files[0]));
  }

  return { result, uploader };
}

export default useDisplayImage;
