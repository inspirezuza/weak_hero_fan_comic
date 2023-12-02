"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <Link color="foreground" href="/">
            <p className="font-bold text-inherit">Weak Hero Fan Comic</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarBrand>
        <Link color="foreground" href="/">
          <p className="font-bold text-inherit">Weak Hero Fan Comic</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="https://www.tumblr.com/"
            target="_blank"
          >
            News
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            Comic
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="aboutus">
            About us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          Language
          {/* <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button> */}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
