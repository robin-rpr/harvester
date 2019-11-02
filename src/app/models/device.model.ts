export interface ISystemReport {
    storage: IStorage;
    swSupport: boolean;
    userAgent: string;
    timestamp: Date;
}

interface IStorage {
    flags: any;
    pwaStatus: any;
    isAuthenticated: boolean;
}
