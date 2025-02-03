'use server'
import React from 'react';
import { Onedoc } from '@onedoc/client';
import { renderToString } from 'react-dom/server';
import fs from 'fs';

const Template = ({ name }: { name: string }) => <h1>Hello, {name}!</h1>;

const onedoc = new Onedoc('118663c3-d4a4-4cd3-bd83-71451780d9a3');
export async function downloadPdf() {
    const { file, link, info, error } = await onedoc.render({
        html: renderToString(<Template name="hallex.costahotmail.com" />),
      });
    
      fs.writeFileSync('output.pdf', Buffer.from(file));
}
downloadPdf()



// (async () => {
//   const { file, link, info, error } = await onedoc.render({
//     html: renderToString(<Template name="world" />),
//   });

//   fs.writeFileSync("output.pdf", Buffer.from(file));
// })();