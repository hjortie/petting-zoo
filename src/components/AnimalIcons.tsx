interface AnimalIconProps {
  showHeart: boolean;
  showFood: boolean;
  heartIcon: string;
  foodIcon: string;
}

export const AnimalIcons = (props: AnimalIconProps) => {
  return (
    <>
      {props.showHeart && (
        <div className="heart-icon">
          <img src={props.heartIcon} alt="" />
        </div>
      )}
      {props.showFood && (
        <div className="food-icon">
          <img src={props.foodIcon} alt="" />
        </div>
      )}
    </>
  );
};
