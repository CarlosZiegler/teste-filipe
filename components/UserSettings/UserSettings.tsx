import { Drawer } from '@mantine/core';

export function UserSettings(props: any) {
  const { isOpen, setIsOpen } = props;
  return (
    <Drawer
      position="right"
      opened={isOpen}
      onClose={() => setIsOpen(false)}
      title="Register"
      padding="xl"
      size="xl"
    >
      {props.children}
    </Drawer>
  );
}
