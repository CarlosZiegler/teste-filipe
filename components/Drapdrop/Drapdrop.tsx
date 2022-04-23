/* eslint-disable no-console */
import React from 'react';
import { Group, Text, useMantineTheme, MantineTheme } from '@mantine/core';
import { Upload, Photo, X, Icon as TablerIcon } from 'tabler-icons-react';
import { Dropzone, DropzoneStatus, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
    : status.rejected
    ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[0]
    : theme.colors.gray[7];
}

function ImageUploadIcon({
  status,
  ...props
}: React.ComponentProps<TablerIcon> & { status: DropzoneStatus }) {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected) {
    return <X {...props} />;
  }

  return <Photo {...props} />;
}

export const dropzoneChildren = (status: DropzoneStatus, theme: MantineTheme) => (
  <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
    <ImageUploadIcon status={status} style={{ color: getIconColor(status, theme) }} size={80} />

    <div>
      <Text size="xl" inline>
        Drag images here or click to select files
      </Text>
      <Text size="sm" color="dimmed" inline mt={7}>
        Attach as many files as you like, each file should not exceed 5mb
      </Text>
    </div>
  </Group>
);

//usage
export function Drapdrop(
  props: Partial<DropzoneProps> & {
    handleOnDrop?: (files: File[]) => void;
    handleOnReject?: (fileRejections: any[]) => void; // resolve types
  }
) {
  const { handleOnDrop, handleOnReject, ...dropZoneProps } = props;
  const theme = useMantineTheme();
  return (
    <Dropzone
      onDrop={handleOnDrop || (() => console.log('onDrop'))}
      onReject={handleOnReject || (() => console.log('onReject'))}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...dropZoneProps}
    >
      {(status) => dropzoneChildren(status, theme)}
    </Dropzone>
  );
}
