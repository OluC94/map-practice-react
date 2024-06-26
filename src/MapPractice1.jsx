import { useEmojiGenerator } from "./useEmojiGenerator";

export default function MapPractice1() {
    const emojisArray = useEmojiGenerator();
    console.log("emojisArray", emojisArray);
    const emojiElements = emojisArray.map((element, index) => {
        return (<div className="emoji" key={index}>{element}</div>)
    })

    return (
        <div className="mapPractice">
            <h2>Map Practice 1</h2>
            <div className="emojiList">
                {emojiElements}
            </div>
        </div>
    );
}
