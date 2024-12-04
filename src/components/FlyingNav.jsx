const FlyingNav = () => {
  return (
    <nav className="fixed z-40 bottom-10 left-1/2 -translate-x-1/2 max-w-[53rem] w-11/12 min-w-max bg-white/70 drop-shadow-lg rounded-full flex gap-10 items-center justify-between p-4 backdrop-blur-lg font-medium">
      <div className="flex gap-8 items-center">
        <img src="./logo.svg" alt="logo" />
        <ul className="flex gap-8 items-center uppercase max-[768px]:hidden">
          <li>about</li>
          <li>works</li>
          <li>services</li>
          <li>team</li>
          <li>contact</li>
        </ul>
      </div>
      <button className="bg-[#36F85C] uppercase pl-4 p-2 rounded-full flex items-center gap-2">
        <span>request quote</span>
        <div className="size-9 min-w-9 bg-white rounded-full grid place-items-center">
          <ion-icon name="call"></ion-icon>
        </div>
      </button>
    </nav>
  );
};

export default FlyingNav;
