/**
 * @param {stamps} Number
 * @return String
 * 1569772800000 => 2019/9/30
 */
export default formatTime = (stamps) => {
  return new Date(stamps).toLocaleDateString()
}