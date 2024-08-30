export class Lease {
    constructor(mac: string, ip: string, hostname: string, dynamic: string) {
        this.mac = mac
        this.ip = ip
        this.hostname
        this.dynamic = dynamic
    }

    mac: string
    ip: string
    hostname: string
    dynamic: string
}