import { useEffect } from 'react';

export function useSEO(title: string, description?: string) {
  useEffect(() => {
    // If the title is exactly "Mintoo", don't duplicate the branding name
    document.title = title === "Mintoo" ? "Mintoo" : `${title} | Mintoo`;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
}
