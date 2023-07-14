/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { ReactNode } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

interface CustomLinkProps {
  children: ReactNode;
  to: string;
  [key: string]: any; // Additional props
}

function CustomLink({ children, to, ...props }: CustomLinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? '#ac7897' : '',
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && ''}
    </div>
  );
}

export default CustomLink;
