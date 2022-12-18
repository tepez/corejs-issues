import type { WorkBook } from '@sheet/core';
import { write } from '@sheet/core';
import { writeFile } from 'fs/promises';


export async function writeWb(wb: WorkBook, filename: string): Promise<void> {
    const buffer = write(wb, {
        type: 'buffer',
        cellStyles: true,
    }) as Buffer;

    await writeFile(filename, buffer);

    console.log(`${filename} written`);
}
