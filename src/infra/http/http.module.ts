import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { DatabaseModel } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
    imports: [DatabaseModel],
    controllers: [NotificationsController],
    providers: [SendNotification],
})
export class HttpModule {}
