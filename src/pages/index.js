import MainWrapper from "../components/MainWrapper";
import { SmoomsProvider } from "../utils/SmoomsState";

export default function Home() {
  return (
    <SmoomsProvider>
      <MainWrapper className="mainWrapper" />
    </SmoomsProvider>
  )
}
