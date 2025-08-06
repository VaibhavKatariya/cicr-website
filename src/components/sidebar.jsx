"use client";
import { useRouter } from "next/navigation";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { useAuth } from "@/context/AuthContext";

export function AppSidebar({
  authUser = { displayName: "", email: "", photo: "" },
  onLogout,
  ...props
}) {
  const router = useRouter();
  const { user, loading, isAdmin, checkingAuth } = useAuth();

  const data = {
    versions: [],
    navMain: [
      {
        title: `Welcome ${user?.displayName || "User"}`,
        url: "/",
        items: [
          {
            title: "Home",
            url: "/",
          }
        ],
      },
    ],
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((navItem) => (
                  <SidebarMenuItem key={navItem.title}>
                    <SidebarMenuButton asChild>
                      <button onClick={() => router.push(navItem.url)}>
                        {navItem.title}
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
