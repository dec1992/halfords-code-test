export interface ILaunch {
    name: string;
    date_utc: string;
    cores: {
        core: string
    }[];
    payloads: string[];
    links: {
        patch: {
            small: string
        }
    };
    success: boolean;
    failures: {
        reason: string
    }[]
}