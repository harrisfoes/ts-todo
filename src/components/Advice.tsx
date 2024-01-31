import { useState ,useEffect} from "react"
import adviceService from "../services/adviceService"


const Advice = () => {
    const [currentAdvice, setCurrentAdvice] = useState<string>("")

useEffect(() => {
    const advice = adviceService
    console.log(advice)
}, [ ])

  return (
    <div>What's the advice</div>
  )
}

export default Advice