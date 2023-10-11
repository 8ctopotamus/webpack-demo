import { boxEl } from "./elements"

import BlueRobotImage from '../images/blue-robot.png'
import YellowRobotImage from '../images/yellow-robot.png'

export const changeBoxColor = () => {
  if (boxEl.dataset.color === 'yellow') {
    boxEl.src = BlueRobotImage
    boxEl.dataset.color = 'blue'
  } else {
    boxEl.src = YellowRobotImage
    boxEl.dataset.color = 'yellow'
  }
}

boxEl.dataset.color = 'yellow'
boxEl.src = YellowRobotImage