// <<<<<<< Tabnine <<<<<<<
import { H2, H3 } from './Heading';
import { Hr } from './Hr';
// import QuickView from './Link';//-
// import { Link as QuickView } from './Link'; // Import the Link component with a different name//+

// export { Link } from './Link'; // Export the Link component//-
import { Pre } from './Pre';
import { Table } from './Table';

import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  h2: H2,
  h3: H3,
  hr: Hr,
  pre: Pre,
  table: Table,
};

export default components;
