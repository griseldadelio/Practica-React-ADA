import React from "react";

export const Background = ({ on }) => {

    // const [color, setColor] = useState("black");
    //setColor(color === "yellow" ? "black" : "yellow")

    const styles = {
        backgroundColor: on ? "yellow" : "black",
        width: 500,
        height: 500,
        color: "white"
    }

    return <p style={styles} ></p>
};
