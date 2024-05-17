import Chat from "./Components/Chat"
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import HomePage from "./Components/HomePage";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className={style.appContainer}>
      <section className="{style.sectionContainer}">
        {/* Navbar */}
        <HomePage />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
