"use client";

import * as React from "react";

import {
  IconBook,
  IconBooks,
  IconChevronLgDown,
  IconCircleCheck,
  IconCirclePerson,
  IconDashboard,
  IconLogout,
  IconPeople,
  IconPersonAdd,
  IconSettings,
  IconStar,
} from "justd-icons";
import { Sidebar, Avatar, Button, Link, Menu } from "ui";

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <Sidebar.Header>
        <Link
          className="flex items-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2"
          href="/dashboard"
        >
          <IconBook fontSize={5} />
          <strong className="font-medium group-data-[collapsible=dock]:hidden">
            FindArticle
          </strong>
        </Link>
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Section>
          <Sidebar.Item isCurrent icon={IconDashboard} href="/dashboard">
            ダッシュボード
          </Sidebar.Item>
          <Sidebar.Item
            icon={IconCircleCheck}
            href="/dashboard/todo"
            badge={35}
          >
            TODOリスト
          </Sidebar.Item>
          <Sidebar.Item icon={IconBooks} href="/dashboard/complete" badge={35}>
            完了リスト
          </Sidebar.Item>
          <Sidebar.Item icon={IconStar} href="/dashboard/favorite" badge={35}>
            お気に入り
          </Sidebar.Item>
          <Sidebar.Item icon={IconSettings} href="/dashboard/setting">
            設定
          </Sidebar.Item>
        </Sidebar.Section>
        <Sidebar.Section collapsible title="共有">
          <Sidebar.Item icon={IconPeople} href="#">
            Team Overview
          </Sidebar.Item>
          <Sidebar.Item icon={IconPersonAdd} href="#">
            Add New Member
          </Sidebar.Item>
          <Sidebar.Item href="#">Manage Roles</Sidebar.Item>
        </Sidebar.Section>
      </Sidebar.Content>
      <Sidebar.Footer className="lg:flex lg:flex-row hidden items-center">
        <Menu>
          <Button
            appearance="plain"
            aria-label="Profile"
            data-slot="menu-trigger"
            className="group"
          >
            <Avatar size="small" shape="circle" src="/default_icon.png" />
            <span className="group-data-[collapsible=dock]:hidden flex items-center justify-center">
              name
              <IconChevronLgDown className="right-3 size-4 absolute group-pressed:rotate-180 transition-transform" />
            </span>
          </Button>
          <Menu.Content className="min-w-[--trigger-width]">
            <Menu.Item href="#">
              <IconCirclePerson />
              プロフィール
            </Menu.Item>
            <Menu.Item href="#">
              <IconSettings />
              設定
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item href="#">
              <IconLogout />
              ログアウト
            </Menu.Item>
          </Menu.Content>
        </Menu>
      </Sidebar.Footer>
      <Sidebar.Rail />
    </Sidebar>
  );
}
