const CheckBox = (props) => {
  const prefectureInfomation = props.value;
  const setPrefCodeData = props.updateData;

  function getPopulationCodeData(value) {
    setPrefCodeData({ name: value.prefName, code: value.prefCode });
  }

  return (
    <label>
      <input
        type="checkbox"
        onChange={() => getPopulationCodeData(prefectureInfomation)}
      />
      {prefectureInfomation.prefName}
    </label>
  );
};

export default CheckBox;
