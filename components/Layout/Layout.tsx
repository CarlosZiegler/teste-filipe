import React from 'react';
import { Sun, MoonStars } from 'tabler-icons-react';
import { AppShell, Navbar, Header, Group, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { MainLinks } from '../MainLinks/MainLinks';
import { User } from '../User/User';
import { Logo } from '../Logo/Logo';

export function Layout(props: any) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height="100" p="xs" style={{ height: '95vh' }}>
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60}>
          <Group sx={{ height: '100%' }} px={20} position="apart">
            <Logo colorScheme={colorScheme} />
            <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
              {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
            </ActionIcon>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      {props.children}
    </AppShell>
  );
}
