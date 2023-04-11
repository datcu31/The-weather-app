import { useTheme, useThemeUpdate } from "../context/theme-context";

const SwitchButton = () => {

    const toggled = useTheme();
    const handleSwitch = useThemeUpdate();

    return (
        <button onClick={handleSwitch} className={`toggle ${toggled ? "night" : ''}`}>
            <div className="notch">
                <div className="crater" />
                <div className="crater" />
            </div>
            <div>
                <div className="shape sm" />
                <div className="shape sm" />
                <div className="shape md" />
                <div className="shape lg" />
            </div>
        </button>
    );
}

export default SwitchButton;