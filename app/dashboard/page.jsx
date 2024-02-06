import HeaderContainer from "../components/DashboardComponents/HeaderContainer.js/HeaderContainer";
import MainGoalsContainer from "../components/DashboardComponents/MainGoalsContainer/MainGoalsContainer";
import SubGoalsContainer from "../components/DashboardComponents/SubGoalsContainer/SubGoalsContainer";

const DashboardPage = () => {
  const TempNav = () => <div className="h-20 w-screen bg-neutral-200 bg-[#DFF3E4]"></div>;

  return (
    <div className="h-screen w-screen flex flex-col bg-[#lelele] overscroll-none">
      <TempNav />
      <div className="px-40 py-6 h-full shadow-lg">
        <HeaderContainer />
        <MainGoalsContainer />
        <SubGoalsContainer />
      </div>
    </div>
  );
};

export default DashboardPage;
