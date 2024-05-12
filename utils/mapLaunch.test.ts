import { ICardLaunch } from "../config/types";
import { ILaunch } from "../stores/data.types";
import { mapLaunch } from "./mapLaunch";

const rawLaunchFail: ILaunch = {
    name: 'name',
    date_utc: 'date',
    cores: [{
        core: 'coreId'
    }],
    payloads: ['id1', 'id2'],
    links: {
        patch: {
            small: 'imageUrl'
        }
    },
    success: true,
    failures: []

}

const mappedLaunchFail: ICardLaunch = {
    name: 'name',
    date: 'date',
    coreId: 'coreId',
    payloads: ['id1', 'id2'],
    result: 'Success!',
    imageUrl: 'imageUrl'
}

const rawLaunchPass: ILaunch = {
    name: 'name',
    date_utc: 'date',
    cores: [{
        core: 'coreId'
    }],
    payloads: ['id1', 'id2'],
    links: {
        patch: {
            small: 'imageUrl'
        }
    },
    success: false,
    failures: [{
        reason: 'fail reason'
    }]

}

const mappedLaunchPass: ICardLaunch = {
    name: 'name',
    date: 'date',
    coreId: 'coreId',
    payloads: ['id1', 'id2'],
    result: 'Failed: fail reason',
    imageUrl: 'imageUrl'
}

test('succesful launch maps correctly', () => {
    expect(mapLaunch(rawLaunchPass)).toEqual(mappedLaunchPass);
});

test('failed launch maps correctly', () => {
    expect(mapLaunch(rawLaunchFail)).toEqual(mappedLaunchFail);
});