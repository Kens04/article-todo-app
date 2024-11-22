"use client";

import { AppSidebar } from "@/components/layout/dashboard/sidebar";
import Theme from "@/components/theme";
import {
  IconChevronLgDown,
  IconCirclePerson,
  IconLogout,
  IconSearch,
  IconSettings,
} from "justd-icons";
import { Avatar, Button, Menu, SearchField, Separator, Sidebar } from "ui";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sidebar.Provider>
      <AppSidebar />
      <Sidebar.Inset>
        <Sidebar.Nav isSticky>
          <span className="flex items-center gap-x-3">
            <Sidebar.Trigger className="-mx-2" />
            <Separator className="h-6 sm:block hidden" orientation="vertical" />
          </span>
          <SearchField className="sm:inline hidden sm:ml-1.5" />
          <Theme />
          <div className="flex sm:hidden items-center gap-x-2">
            <Button
              appearance="plain"
              aria-label="Search..."
              size="square-petite"
            >
              <IconSearch />
            </Button>
            <Menu>
              <Menu.Trigger
                aria-label="Profile"
                className="flex items-center gap-x-2 group"
              >
                <Avatar size="small" shape="circle" src="/default_icon.png" />
                <IconChevronLgDown className="size-4 group-pressed:rotate-180 transition-transform" />
              </Menu.Trigger>
              <Menu.Content className="min-w-[--trigger-width]">
                <Menu.Item href="#">
                  <IconCirclePerson />
                  プロフィール
                </Menu.Item>
                <Menu.Item href="#">
                  <IconSettings />
                  設定
                </Menu.Item>
                <Menu.Item href="#">
                  <IconLogout />
                  ログアウト
                </Menu.Item>
              </Menu.Content>
            </Menu>
          </div>
        </Sidebar.Nav>
        <div className="p-4 lg:p-6">{children}</div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  );
};

export default DashboardLayout;
