import { Navbar, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Layout } from "./NextUi/Layout";
import { AcmeLogo } from "./NextUi/AcmeLogo.js";
import Link from "next/link";

import { BiPlus } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { MdTaskAlt } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export default function Header() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        // console.error(error);
      });
  };

  return (
    <Layout className="f">
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            TODOser
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Link
            className="font-semibold flex items-center text-inactiveText mr-3"
            href="/"
          >
            <BiPlus className="text-xl" />
            Add Task
          </Link>
          <Link
            className="font-semibold flex items-center text-inactiveText mr-3"
            href="/my_task"
          >
            <TbListDetails className="text-xl" />
            My Task
          </Link>
          <Link
            className="font-semibold flex items-center text-inactiveText"
            href={"/completed_task"}
          >
            <MdTaskAlt className="text-xl" />
            Completed Task
          </Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          {user?.uid ? (
            <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as="button"
                    color="secondary"
                    size="md"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="secondary"
                onAction={(actionKey) => console.log({ actionKey })}
              >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    {user?.email}
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                  My Settings
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  <span onClick={handleLogOut}> Log Out</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Link
              className="font-semibold flex items-center text-inactiveText mr-3"
              href="/"
            >
              <BiPlus className="text-xl" />
              Add Task
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              className="font-semibold flex items-center text-inactiveText mr-3"
              href="/my_task"
            >
              <TbListDetails className="text-xl" />
              My Task
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              className="font-semibold flex items-center text-inactiveText"
              href={"/completed_task"}
            >
              <MdTaskAlt className="text-xl" />
              Completed Task
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
