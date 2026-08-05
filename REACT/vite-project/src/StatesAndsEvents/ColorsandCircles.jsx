import { useState } from "react";

function Colorcircle() {
    const [colors, setColors] = useState([]);
    const [color, setColor] = useState("");
    const [radius, setRadius] = useState("");

    const onSubmit = () => {
        const cloneColors = structuredClone(colors);
        cloneColors.push({ color });
        setColors(cloneColors);
        setColor("");
    };

    return (
        <div>
            <ColorForm color={color} setColor={setColor} onSubmit={onSubmit} />
            <ColorList colors={colors} />
        </div>
    );

    function ColorForm(props) {
        const { color, setColor, onSubmit } = props;
        return (
            <div>
                <label>Color</label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                <button onClick={onSubmit}>Save</button>
            </div>
        );
    }

    function ColorList(props) {
        const { colors } = props;
        return (
            <div style={{ marginTop: "20px" }}>
                {colors.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            margin: "10px",
                            width: "100px",
                            height: "30px",
                            backgroundColor: item.color,
                            color: "white",
                            padding: "10px",
                        }}
                    >
                        {item.color}
                    </div>
                ))}
            </div>
        );
    }
}

export default Colorcircle;