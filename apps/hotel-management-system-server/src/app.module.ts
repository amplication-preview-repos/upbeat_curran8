import { Module } from "@nestjs/common";
import { RestaurantPosModule } from "./restaurantPos/restaurantPos.module";
import { CurioShopPosModule } from "./curioShopPos/curioShopPos.module";
import { RoomServiceModule } from "./roomService/roomService.module";
import { BarPosModule } from "./barPos/barPos.module";
import { ReservationModule } from "./reservation/reservation.module";
import { RoomModule } from "./room/room.module";
import { StaffModule } from "./staff/staff.module";
import { AccountModule } from "./account/account.module";
import { StoreModule } from "./store/store.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    RestaurantPosModule,
    CurioShopPosModule,
    RoomServiceModule,
    BarPosModule,
    ReservationModule,
    RoomModule,
    StaffModule,
    AccountModule,
    StoreModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
