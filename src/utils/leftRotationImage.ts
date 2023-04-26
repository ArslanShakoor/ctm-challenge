export function leftRotationImage(rotation: number) {
  let newRotation = rotation - 90;
  if (newRotation >= 360) {
    newRotation = -360;
  }

  return newRotation;
}
