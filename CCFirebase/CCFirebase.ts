import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CCFirebase')
class CCFirebase {
    private logEvent;

    public Init(): void {
        try {
            this.logEvent = director["firebase_log_event"];
        } catch (error) {
            console.error(error);
        }
    }

    public LogEvent(name, params): void {
        try {
            this.logEvent(name, params);
        } catch (error) {
            console.error(error);
        }
    }

    public LogPurchase(lotId: string, revenue: number, transactionId: string) {
        const params = {
            transaction_id: transactionId,
            affiliation: 'Telegram',
            lot_id: lotId,
            currency: 'USD',
            value: revenue
        };
        this.LogEvent("purchase", params);
    }
}
export default new CCFirebase();