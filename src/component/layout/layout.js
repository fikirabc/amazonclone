import Header from "../header/header";
function layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default layout
