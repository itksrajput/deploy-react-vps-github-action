import { Typography } from "../../../components/common/typography";
import AreaChartExample from "./components/chart";

const Dashboard = () => {
  return (
    <div className="w-full h-full grid lg:grid-cols-5 grid-cols-1 text-2xl p-5 gap-5 ">
      <div className="lg:col-span-3  ">
        <div className="flex justify-between items-center gap-5">
          <div className="flex flex-col gap-2 shadow px-5 w-full py-3 rounded-xl">
            <Typography>Online sales</Typography>
            <Typography variant="h4">$9,583.99</Typography>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green" />
              <Typography>80%</Typography>
            </div>
          </div>
          <div className="flex flex-col gap-2 shadow px-5 w-full py-3 rounded-xl">
            <Typography>Online sales</Typography>
            <Typography variant="h4">$9,583.99</Typography>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green" />
              <Typography>80%</Typography>
            </div>
          </div>
          <div className="flex flex-col gap-2 shadow px-5 w-full py-3 rounded-xl">
            <Typography>Online sales</Typography>
            <Typography variant="h4">$9,583.99</Typography>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green" />
              <Typography>80%</Typography>
            </div>
          </div>
        </div>
        <div className="p-5 shadow my-5 rounded-xl">
          <div className="my-2">
            <Typography>Recent Sales</Typography>
          </div>
          <AreaChartExample />
        </div>
        <div></div>
      </div>
      <div className="lg:col-span-2 shadow"></div>
    </div>
  );
};

export default Dashboard;
