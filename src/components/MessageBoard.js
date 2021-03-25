import data from "../data/demo.json";
import Message from "./Messsage";

export default function Messages({ messages }) {

    // console.log(messages[0].tags);

    const displayMessages = messages.map((mssg, index) => {
        return <Message key={index} body={mssg.body} tagPayload={mssg.tags} />
    })

    return (
        <section className="mssgBoardWrapper">
            {displayMessages}
        </section>
    )
}
