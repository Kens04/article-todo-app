"use client";

import { useAuth } from "@/components/hooks/useAuth";
import MainSection from "@/components/layout/top/main-section";
import Theme from "@/components/theme";
import {
  createClientComponentClient,
  Session,
} from "@supabase/auth-helpers-nextjs";
import {
  IconBook,
  IconChevronLgDown,
  IconDashboard,
  IconLogout,
  IconSettings,
} from "justd-icons";
import { useRouter } from "next/navigation";
import {
  Avatar,
  Button,
  buttonStyles,
  Container,
  Heading,
  Link,
  Menu,
  Navbar,
  Separator,
} from "ui";

interface HeaderProps {
  children: React.ReactNode;
  session: Session | null;
}

const TOPHeader = ({ session, children }: HeaderProps) => {
  const { handleLogout } = useAuth();
  const user = session?.user;

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
          {session ? null : (
            <>
              <Link
                className={`${buttonStyles({ intent: "primary" })} py-1 h-auto`}
                href="/register"
              >
                新規登録
              </Link>
              <Link
                className={`${buttonStyles({
                  intent: "secondary",
                })} py-1 h-auto`}
                href="/login"
              >
                ログイン
              </Link>
            </>
          )}
          <div className="flex items-center gap-x-2">
            <Theme />
          </div>
          <Separator orientation="vertical" className="h-6 ml-1 mr-3" />
          {session ? (
            <Menu>
              <Menu.Trigger
                aria-label="Open Menu"
                className="group gap-x-2 flex items-center"
              >
                <Avatar
                  alt={user?.user_metadata.name}
                  size="small"
                  shape="circle"
                  src={user ? user?.user_metadata.avatar_url : "/default.png"}
                  width={32}
                  height={32}
                  className="outline-0"
                />
                <IconChevronLgDown className="size-4 group-pressed:rotate-180 transition-transform" />
              </Menu.Trigger>
              <Menu.Content
                placement="bottom"
                showArrow
                className="sm:min-w-56"
              >
                <Menu.Section>
                  <Menu.Header separator>
                    <span className="block">{user?.user_metadata.name}</span>
                  </Menu.Header>
                </Menu.Section>

                <Menu.Item href="/dashboard">
                  <IconDashboard />
                  ダッシュボード
                </Menu.Item>
                <Menu.Item href="#settings">
                  <IconSettings />
                  設定
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item className="bg-transparent hover:bg-transparent active:bg-transparent cursor-auto">
                  <Button
                    intent="primary"
                    onClick={handleLogout}
                    className="w-full"
                  >
                    <IconLogout />
                    ログアウト
                  </Button>
                </Menu.Item>
              </Menu.Content>
            </Menu>
          ) : null}
        </Navbar.Section>
      </Navbar.Nav>
      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger className="-ml-2" />
        </Navbar.Flex>
        <Navbar.Flex>
          <Navbar.Flex>
            {session ? null : (
              <>
                <Link
                  className={`${buttonStyles({
                    intent: "primary",
                  })} py-1 h-auto`}
                  href="/register"
                >
                  新規登録
                </Link>
                <Link
                  className={`${buttonStyles({
                    intent: "secondary",
                  })} py-1 h-auto`}
                  href="/login"
                >
                  ログイン
                </Link>
              </>
            )}
          </Navbar.Flex>
          {session ? (
            <Menu>
              <Menu.Trigger
                aria-label="Open Menu"
                className="group gap-x-2 flex items-center"
              >
                <Avatar
                  alt={user?.user_metadata.name}
                  size="small"
                  shape="circle"
                  src={user ? user?.user_metadata.avatar_url : "/default.png"}
                  width={32}
                  height={32}
                  className="outline-0"
                />
                <IconChevronLgDown className="size-4 group-pressed:rotate-180 transition-transform" />
              </Menu.Trigger>
              <Menu.Content
                placement="bottom"
                showArrow
                className="sm:min-w-56"
              >
                <Menu.Section>
                  <Menu.Header separator>
                    <span className="block">{user?.user_metadata.name}</span>
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
                <Menu.Item className="bg-transparent hover:bg-transparent active:bg-transparent cursor-auto">
                  <Button
                    intent="primary"
                    onClick={handleLogout}
                    className="w-full"
                  >
                    <IconLogout />
                    ログアウト
                  </Button>
                </Menu.Item>
              </Menu.Content>
            </Menu>
          ) : null}
        </Navbar.Flex>
      </Navbar.Compact>
      <Navbar.Inset>
        <Container className="sm:py-12 py-6">
          <Heading>
            {children}
          </Heading>
        </Container>
      </Navbar.Inset>
    </Navbar>
  );
};

export default TOPHeader;
