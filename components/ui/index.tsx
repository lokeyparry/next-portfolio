
import { H2, H3 } from './Heading';
import { Hr } from './Hr';
import { link } from './Link';

import { Pre } from './Pre';
import { Table } from './Table';

import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  a: link,  
  h2: H2,
  h3: H3,
  hr: Hr,
  pre: Pre,
  table: Table,
};

export default components;
