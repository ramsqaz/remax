import FlexBox from "../FlexBox";
import "./styles.scss";

const Checkbox = ({ label, value, type, onChange, ...props }) => (
    <FlexBox align="center">
        <label className="cl-checkbox">
            <input checked={value} type="checkbox" onChange={(e) => onChange && onChange(e.target?.checked)} {...props} />
            <span></span>
        </label>
        <div className="label">{label}</div>
    </FlexBox>
);

export default Checkbox;