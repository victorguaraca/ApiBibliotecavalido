import { BibliotecaModule } from './Biblioteca/biblioteca.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config/constants';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // Ruta donde se guardan las imágenes
      serveRoot: '/uploads', // URL para acceder a las imágenes
    }),
    BibliotecaModule, ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: false,
        dropSchema: true, 
      }),
      inject: [ConfigService],

      

    }),
    AuthModule,
    BibliotecaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
