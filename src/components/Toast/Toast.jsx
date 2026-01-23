export const Toast = ({ message, type }) => {
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 px-6 py-4 rounded-lg text-white shadow-lg transition-all
      ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
    >
      {message}
    </div>
  );
};
