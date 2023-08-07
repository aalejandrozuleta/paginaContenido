export const handleScrollLeft = (currentPosition, bloqueRef) => {
  const bloqueWidth = bloqueRef.current.offsetWidth;
  return Math.max(currentPosition - bloqueWidth, 0);
};
export const handleScrollRight = (currentPosition, bloqueRef) => {
  const bloqueWidth = bloqueRef.current.offsetWidth;
  const maxPosition = bloqueRef.current.scrollWidth - bloqueRef.current.offsetWidth;
  return Math.min(currentPosition + bloqueWidth, maxPosition);
};
export const handleMouseEnter = (index, setHoveredIndex) => {
  setHoveredIndex(index);
};
export const handleMouseLeave = (setHoveredIndex) => {
  setHoveredIndex(-1);
};