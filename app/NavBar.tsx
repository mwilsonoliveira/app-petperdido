"use client";

import { SignOut } from "@phosphor-icons/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Skeleton,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";
import { MdOutlinePets } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <MdOutlinePets size="40" />
            </Link>
            Pet Perdido
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

const AuthStatus = () => {
  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={"https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Buddy"}
            fallback="?"
            size="4"
            radius="full"
            className="cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content variant="soft" color="indigo" align="center">
          <DropdownMenu.Item>Meu abrigo</DropdownMenu.Item>
          <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Logout <SignOut size={18}/></DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

export default NavBar;
