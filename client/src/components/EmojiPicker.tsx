// EmojiPicker.tsx
import React, { useEffect, useRef } from 'react';

import data from '@emoji-mart/data';
import { Picker } from 'emoji-mart';
import i18n from '@emoji-mart/data/i18n/pt.json';
i18n.search_no_results_1 = 'Sem Resultados';

const EmojiPicker = (props: any) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    new Picker({ ...props, data, ref, i18n });
  }, [props]);

  return <div ref={ref} />;
};

export default EmojiPicker;