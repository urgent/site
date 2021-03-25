import data from "../data/demo.json";

export default function Messages(messages) {
    return (
        <section className="mssgBoardWrapper">
            {`Messages Display: ${data.messages[0].body}`}
        </section>
    )
}
