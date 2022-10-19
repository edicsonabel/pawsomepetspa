export const random = ({ min, max, float = false }) => {
  const num = Number.parseFloat(Math.random() * (max - min) + min).toFixed(float ? 2 : 0)
  return num
}
