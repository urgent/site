import MainWrapper from "../components/MainWrapper";
import TagContext from "../utils/TagContext";



export default function Home() {
  return (
    <TagContext.Provider value={{ test: "test" }}>
      <MainWrapper className="mainWrapper" />
    </TagContext.Provider>
  )
}
