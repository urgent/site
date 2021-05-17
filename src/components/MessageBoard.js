import CreateMessageWrapper from './CreateMessageWrapper';

// this component is the container for displaying all individual messages
export default function Messages({ messages }) {

  return (
    <section className="mssgBoardWrapper">
      <div className="introText mainFont xl">
        👋 Hi! Select tags to pull up messages
      </div>
      {false && (
        <>
          <p className="altMssgsTrigger" onClick={() => handleAltTrigger()}>
            Related Searches ▼
          </p>

          <div className={altMssgs.active ? "" : "altHide"}>{altMessages}</div>
        </>
      )}
      <CreateMessageWrapper />
    </section>
  );
}
