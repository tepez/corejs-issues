import { utils, WorkSheet } from '@sheet/core';
import { writeWb } from './utils';

async function main(): Promise<void> {
    const wb = utils.book_new()

    const sheet: WorkSheet = {
        'A1': {
            't': 's',
            'v': 'aaa',
        },
        'A2': {
            'v': 'aaa',
            't': 's',
        },
        'A3': {
            'v': 'aaa',
            't': 's',
        },
        '!ref': 'A1:A3',
        '!condfmt': [
            {
                'ref': 'A2:A3',
                't': 'text',
                'v': 'aaa',
                's': {
                    'fgColor': {
                        'rgb': 'FF0000',
                    },
                },
            },
        ],
    }
    utils.book_append_sheet(wb, sheet);
    await writeWb(wb, '2_condfmt.xlsx');
}

main().catch((err: any) => {
    console.error(err);
    process.exit(1);
});