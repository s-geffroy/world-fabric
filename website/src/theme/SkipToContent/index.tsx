import React, {type ReactNode} from 'react';
import SkipToContent from '@theme-original/SkipToContent';

// Emplacement du bandeau ligne de crête, juste après le lien d'évitement :
// au clavier, « Aller au contenu » reste le premier arrêt. Le kit
// (ldc-kit.js) remplit cet élément vide au lieu de poser son bandeau en tête
// de <body>. Sans le kit, l'élément reste vide et ne prend aucune place.
export default function SkipToContentWrapper(props: object): ReactNode {
  return (
    <>
      <SkipToContent {...props} />
      {React.createElement('ldc-bandeau')}
    </>
  );
}
