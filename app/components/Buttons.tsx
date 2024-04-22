function Buttons(props: { isMuted: boolean; onClick: () => void }) {
  const { isMuted, onClick } = props;
  return (
    <div className="fixed z-10 bottom-0 left-0 right-0 flex justify-center pb-4">
      <div className="flex space-x-4">
        <a
          className="px-5 py-3 text-base font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-40"
          href="/"
        >
          End Call
        </a>
        <button
          className="px-5 py-3 text-base font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-gray-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-40"
          onClick={onClick}
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
    </div>
  );
}

export default Buttons;
