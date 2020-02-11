export interface IPWAMetricsModel {
    installed: boolean;
    eventLog: IEventLogModel[];
}

interface IEventLogModel {
    outcome: string;
    timestamp: Date;
    platform: string;
}
