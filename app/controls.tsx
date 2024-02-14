import Select from "react-select";

export type ControlType = {
  onSortDirectionSelect: (value?: string) => void,
  onSortFieldSelect: (value?: string) => void,
}

const Controls = ({ onSortFieldSelect, onSortDirectionSelect }: ControlType) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select options={fieldOptions}
          inputId="sort-field"
          className="input"
          onChange={(e) => onSortFieldSelect(e?.value)}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={(e) => onSortDirectionSelect(e?.value)}
        />
      </div>
    </div>
  );
};

export default Controls;