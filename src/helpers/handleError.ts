import defaultImage from "../assets/default_image.jpg";

export const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = defaultImage;
  e.currentTarget.alt = "Default image";
};
