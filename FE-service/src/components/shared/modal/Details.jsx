import Title from "../Title";

const Details = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed overflow-x-hidden overflow-y-auto top-0 right-0 left-0 bottom-0 z-50 place-content-center w-full md: inset-0 h-[calc(100%-1rem)] max-h-full backdrop:blur-lg"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-lg shadow-sm"
        >
          <div className="flex flex-col">
            <Title>Test</Title>
            <Title>Test</Title>
            <Title>Test</Title>
            <Title>Test</Title>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
