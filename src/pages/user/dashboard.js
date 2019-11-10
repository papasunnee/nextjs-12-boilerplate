import requireUserLogin from "../../hocs/requireUserLogin";

const Dashboard = () => {
  return (
    <div>
      <h2>Sunday</h2>
    </div>
  );
};

export default requireUserLogin(Dashboard);
