import { Module } from '@nestjs/common';
import { DatabaseModel } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
    imports: [HttpModule, DatabaseModel],
})
export class AppModule {}
