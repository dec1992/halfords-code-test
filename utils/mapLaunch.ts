import { ICardLaunch } from "../config/types";
import { ILaunch } from "../stores/data.types";

export const mapLaunch = (launch: ILaunch) => {
    const { name, date_utc, cores, payloads, success, failures, links } = launch
    const result = success ? 'Success!' : `Failed: ${failures[0].reason}`
    const mappedLaunch: ICardLaunch = {
        name,
        date: date_utc,
        coreId: cores[0].core,
        payloads,
        result,
        imageUrl: links.patch.small
    }
    return mappedLaunch
}