function Filterllist({ title, options = [] }) {
  return (
    <div>
      <b>{title}</b>
      <div>
        {options.map((option, index) => {
          return (
            <div key={index}>
              <input type="checkbox" />
              <span>{option}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filterllist;