const Card = ({ children }) => {
  return <div className="max-w-lg">{children}</div>;
};

const Image = ({ style }) => {
  return (
    <div className="img">
      <div className={`w-[200px] h-52 bg-${style}-500`}></div>
    </div>
  );
};

const Desc = ({ title }) => {
  return (
    <div className="text">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-slate-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius deserunt
        nemo impedit sit, debitis cupiditate ullam reiciendis ipsa at beatae
        odit asperiores magni quaerat voluptatibus ab libero fugiat unde nisi?
      </p>
    </div>
  );
};

const Cta = ({ children }) => {
  return (
    <div className="cta">
      <button className="p-3 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 ring-blue-200 ring-offset-2">
        Buy This Product
      </button>
      {children}
    </div>
  );
};

Card.Image = Image;
Card.Desc = Desc;
Card.Cta = Cta;

export default Card;
