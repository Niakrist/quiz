import sprite from "./sprite.svg";

const IconSvg = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={sprite + "#" + id} />
    </svg>
  );
};

export default IconSvg;
