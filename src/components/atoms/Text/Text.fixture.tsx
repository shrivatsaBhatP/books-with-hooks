import React from 'react';
import Text from './index';

export default {
  Heading: (
    <Text type="h1">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
      facilis?
    </Text>
  ),
  Paragraph: (
    <Text type="p">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
      facilis?
    </Text>
  ),
  Custom: (
    <Text type="p" size="large" theme="unset" fontWeight={600} color="red">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
      facilis?
    </Text>
  ),
};
