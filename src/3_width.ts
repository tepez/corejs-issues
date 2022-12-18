import { CellObject, utils, WorkSheet } from '@sheet/core';
import { writeWb } from './utils';

async function main(): Promise<void> {
    const wb = utils.book_new()

    const sheet: WorkSheet = {
        'A1': {
            't': 's',
            'v': 'aaa',
        } as CellObject,
        'A2': {
            'v': 'aaa',
            't': 's',
        } as CellObject,
        'A3': {
            'v': 'aaa',
            't': 's',
        },
        '!ref': 'A1:A3',
        '!cols': [
            {
                width: 10,
            },
        ],
    }
    utils.book_append_sheet(wb, sheet);
    await writeWb(wb, '3_width.xlsx');
}

main().catch((err: any) => {
    console.error(err);
    process.exit(1);
});