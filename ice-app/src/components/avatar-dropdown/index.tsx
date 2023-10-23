import { outLogin } from "@/services";
import { Icon } from "@/util";
import { Avatar, Dropdown, Menu, Space } from "antd";

export default ({ avatarUrl, userName }) => {
  const logout = async () => {
    const { code } = await outLogin();
    if (code === 200) {
      location.reload();
    }
  };
  return (
    <div className="app-right-header">
      <Space>
        <Avatar size={32} src={avatarUrl} />
        <Dropdown
          placement="bottom"
          overlay={
            <Menu>
              <Menu.Item
                onClick={logout}
                icon={
                  <Icon type="icon-tuichudenglu" style={{ fontSize: 18 }} />
                }
              >
                退出登录
              </Menu.Item>
            </Menu>
          }
        >
          <a
            style={{
              marginRight: 12,
              whiteSpace: "nowrap",
              fontWeight: "bold",
            }}
          >
            {userName}
          </a>
        </Dropdown>
      </Space>
    </div>
  );
};
