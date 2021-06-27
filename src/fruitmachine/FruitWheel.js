import FruitPart from "./FruitPart"
import { WheelOuter } from "./styles/fruitMachine"


const FruitWheel = ({fruitWheel, wheelMovementStart, wheelMovementEnd, wheelMove, wheelSpeed}) => {
    return (
        <WheelOuter 
            wheelMovementStart={wheelMovementStart}
            wheelMovementEnd={wheelMovementEnd}
            wheelMove={wheelMove}
            wheelSpeed={wheelSpeed}
        >
            {fruitWheel.map((wheelPart, index)=>(<FruitPart key={index} fruitId={wheelPart} />))}
        </WheelOuter>)
}

export default FruitWheel