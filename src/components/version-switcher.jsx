import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

export function VersionSwitcher({ versions, defaultVersion }) {
  const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg">
              <div className="flex flex-col leading-none dark:hidden">
                <Image
                  src="/CICRfLOGO_WHITE.PNG"
                  alt="CICR Logo Light"
                  width={128}
                  height={128}
                />
              </div>

              <div className="hidden dark:flex flex-col gap-0.5 leading-none">
                <Image
                  src="/CICRfLOGO.PNG"
                  alt="CICR Logo Dark"
                  width={128}
                  height={128}
                />
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
