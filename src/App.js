import "./App.css";
import { Menu, Space, Input, Card } from "antd";
import {
  HomeFilled,
  DashboardOutlined,
  DollarCircleOutlined,
  MoneyCollectOutlined,
  EditOutlined,
  SwitcherOutlined,
} from "@ant-design/icons/lib/icons";
import {
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeFilled,
} from "@ant-design/icons";

function App() {
  const namesArrayForJuan = [
    { first: "Dan", lastName: "Douangkesone" },
    { first: "Juan", lastName: "Lo" },
    { first: "fart", lastName: "jokes" },
  ];

  return (
    <div className="App">
      <Space>
        <Menu
          mode="inline"
          onClick={(info) => {
            console.log(info.key);
          }}
          defaultOpenKeys={["dashboard"]}
          items={[
            { label: <Input.Search placeholder="Search"></Input.Search> },
            { label: "Home", key: "home", icon: <HomeFilled></HomeFilled> },
            {
              label: "Dashboard",
              key: "dashboard",
              icon: <DashboardOutlined />,
              children: [
                {
                  label: "Revenue",
                  key: "rev",
                  icon: <DollarCircleOutlined />,
                },
                {
                  label: <span style={{ color: "#f00" }}>Expenses</span>,
                  key: "exp",
                  icon: <MoneyCollectOutlined />,
                },
              ],
            },
            {
              label: "User Management",
              key: "um",
              type: "group",
              children: [
                { label: "Edit Profile", key: "ep", icon: <EditOutlined /> },
                {
                  label: "Switch Account",
                  key: "sa",
                  icon: <SwitcherOutlined />,
                },
              ],
            },
            { label: "Signout", key: "signout", danger: true },
          ]}
        ></Menu>
        <Card
          hoverable={true}
          style={{ width: 320 }}
          actions={[
            <FacebookFilled style={{ color: "blue" }} />,
            <TwitterOutlined style={{ color: "skyblue" }} />,
            <InstagramOutlined style={{ color: "purple" }} />,
            <YoutubeFilled style={{ color: "red" }} />,
          ]}
          cover={
            <div
              style={{
                height: 150,
                width: "100%",
                background: "linear-gradient(#e66465, #9198e5)",
                color: "white",
                fontSize: 30,
                paddingTop: 20,
                fontFamily: "cursive",
              }}
            >
              Ant Design Card
            </div>
          }
        >
          <Card.Meta
            title={"Code With Aamir"}
            description="@CodeWithAamir"
          ></Card.Meta>
          <p>This is the content of the card</p>
        </Card>
      </Space>
    </div>
  );
}

export default App;
