import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { wake } from 'wol';
import { Env } from './env';
import { Lease } from './lease.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService<Env>
  ) { }



  async sendRequest(lease: Lease) {
    return new Promise((resolve, reject) => {
      wake('', (err, result) => {
        
      })
    })
  }
}
