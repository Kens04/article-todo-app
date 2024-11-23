"use client";

import Theme from "@/components/theme";
import {
  IconBook,
  IconChevronLgDown,
  IconDashboard,
  IconLogout,
  IconSettings,
} from "justd-icons";
import {
  Avatar,
  buttonStyles,
  Container,
  Heading,
  Link,
  Menu,
  Navbar,
  Separator,
} from "ui";

const TOPHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Navbar>
      <Navbar.Nav>
        <Navbar.Logo href="#">
          <IconBook fontSize={5} />
          <strong className="font-medium group-data-[collapsible=dock]:hidden">
            FindArticle
          </strong>
        </Navbar.Logo>
        <Navbar.Section>
          <Navbar.Item href="#">Store</Navbar.Item>
          <Navbar.Item href="#">Mac</Navbar.Item>
          <Navbar.Item href="#">iPad</Navbar.Item>
          <Navbar.Item href="#">iPhone</Navbar.Item>
        </Navbar.Section>
        <Navbar.Section className="ml-auto hidden lg:flex">
          <div className="flex items-center gap-x-2">
            <Link
              className={buttonStyles({ intent: "primary" })}
              href="/register"
            >
              新規登録
            </Link>
            <Link
              className={buttonStyles({ intent: "secondary" })}
              href="/login"
            >
              ログイン
            </Link>
            <Theme />
          </div>
          <Separator orientation="vertical" className="h-6 ml-1 mr-3" />
          <Menu>
            <Menu.Trigger
              aria-label="Open Menu"
              className="group gap-x-2 flex items-center"
            >
              <Avatar
                alt="アイコン"
                size="small"
                shape="circle"
                src="/default.png"
                className="outline-0"
              />
              <IconChevronLgDown className="size-4 group-pressed:rotate-180 transition-transform" />
            </Menu.Trigger>
            <Menu.Content placement="bottom" showArrow className="sm:min-w-56">
              <Menu.Section>
                <Menu.Header separator>
                  <span className="block">名前</span>
                </Menu.Header>
              </Menu.Section>

              <Menu.Item href="#dashboard">
                <IconDashboard />
                ダッシュボード
              </Menu.Item>
              <Menu.Item href="#settings">
                <IconSettings />
                設定
              </Menu.Item>
              <Menu.Separator />
              <Menu.Item href="#logout">
                <IconLogout />
                ログアウト
              </Menu.Item>
            </Menu.Content>
          </Menu>
        </Navbar.Section>
      </Navbar.Nav>
      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger className="-ml-2" />
        </Navbar.Flex>
        <Navbar.Flex>
          <Navbar.Flex>
            <Link
              className={buttonStyles({ intent: "primary" })}
              href="/register"
            >
              新規登録
            </Link>
            <Link
              className={buttonStyles({ intent: "secondary" })}
              href="/login"
            >
              ログイン
            </Link>
          </Navbar.Flex>
          <Menu>
            <Menu.Trigger
              aria-label="Open Menu"
              className="group gap-x-2 flex items-center"
            >
              <Avatar
                alt="アイコン"
                size="small"
                shape="circle"
                src="/default.png"
                className="outline-0"
              />
              <IconChevronLgDown className="size-4 group-pressed:rotate-180 transition-transform" />
            </Menu.Trigger>
            <Menu.Content placement="bottom" showArrow className="sm:min-w-56">
              <Menu.Section>
                <Menu.Header separator>
                  <span className="block">名前</span>
                </Menu.Header>
              </Menu.Section>

              <Menu.Item href="#dashboard">
                <IconDashboard />
                ダッシュボード
              </Menu.Item>
              <Menu.Item href="#settings">
                <IconSettings />
                設定
              </Menu.Item>
              <Menu.Separator />
              <Menu.Item href="#logout">
                <IconLogout />
                ログアウト
              </Menu.Item>
            </Menu.Content>
          </Menu>
        </Navbar.Flex>
      </Navbar.Compact>
      <Navbar.Inset>
        <Container className="sm:py-12 py-6">
          <Heading>
            {children}
            {/* <MainSection /> */}
          </Heading>
        </Container>
      </Navbar.Inset>
    </Navbar>
  );
};

export default TOPHeader;
