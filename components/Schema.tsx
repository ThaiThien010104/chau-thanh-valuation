import { ReactNode } from 'react';

interface SchemaProps {
  schema: object | object[];
}

export default function Schema({ schema }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(Array.isArray(schema) ? schema : [schema]),
      }}
    />
  );
}
