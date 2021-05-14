const CheckBox = ({ value }) => {
  const prefectureInfomation = value;
  return (
    <label>
      <input type="checkbox" />
      {prefectureInfomation}
    </label>
  );
};

export default CheckBox;
