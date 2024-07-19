import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RestaurantPosList } from "./restaurantPos/RestaurantPosList";
import { RestaurantPosCreate } from "./restaurantPos/RestaurantPosCreate";
import { RestaurantPosEdit } from "./restaurantPos/RestaurantPosEdit";
import { RestaurantPosShow } from "./restaurantPos/RestaurantPosShow";
import { CurioShopPosList } from "./curioShopPos/CurioShopPosList";
import { CurioShopPosCreate } from "./curioShopPos/CurioShopPosCreate";
import { CurioShopPosEdit } from "./curioShopPos/CurioShopPosEdit";
import { CurioShopPosShow } from "./curioShopPos/CurioShopPosShow";
import { RoomServiceList } from "./roomService/RoomServiceList";
import { RoomServiceCreate } from "./roomService/RoomServiceCreate";
import { RoomServiceEdit } from "./roomService/RoomServiceEdit";
import { RoomServiceShow } from "./roomService/RoomServiceShow";
import { BarPosList } from "./barPos/BarPosList";
import { BarPosCreate } from "./barPos/BarPosCreate";
import { BarPosEdit } from "./barPos/BarPosEdit";
import { BarPosShow } from "./barPos/BarPosShow";
import { ReservationList } from "./reservation/ReservationList";
import { ReservationCreate } from "./reservation/ReservationCreate";
import { ReservationEdit } from "./reservation/ReservationEdit";
import { ReservationShow } from "./reservation/ReservationShow";
import { RoomList } from "./room/RoomList";
import { RoomCreate } from "./room/RoomCreate";
import { RoomEdit } from "./room/RoomEdit";
import { RoomShow } from "./room/RoomShow";
import { StaffList } from "./staff/StaffList";
import { StaffCreate } from "./staff/StaffCreate";
import { StaffEdit } from "./staff/StaffEdit";
import { StaffShow } from "./staff/StaffShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { StoreList } from "./store/StoreList";
import { StoreCreate } from "./store/StoreCreate";
import { StoreEdit } from "./store/StoreEdit";
import { StoreShow } from "./store/StoreShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HotelManagementSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="RestaurantPos"
          list={RestaurantPosList}
          edit={RestaurantPosEdit}
          create={RestaurantPosCreate}
          show={RestaurantPosShow}
        />
        <Resource
          name="CurioShopPos"
          list={CurioShopPosList}
          edit={CurioShopPosEdit}
          create={CurioShopPosCreate}
          show={CurioShopPosShow}
        />
        <Resource
          name="RoomService"
          list={RoomServiceList}
          edit={RoomServiceEdit}
          create={RoomServiceCreate}
          show={RoomServiceShow}
        />
        <Resource
          name="BarPos"
          list={BarPosList}
          edit={BarPosEdit}
          create={BarPosCreate}
          show={BarPosShow}
        />
        <Resource
          name="Reservation"
          list={ReservationList}
          edit={ReservationEdit}
          create={ReservationCreate}
          show={ReservationShow}
        />
        <Resource
          name="Room"
          list={RoomList}
          edit={RoomEdit}
          create={RoomCreate}
          show={RoomShow}
        />
        <Resource
          name="Staff"
          list={StaffList}
          edit={StaffEdit}
          create={StaffCreate}
          show={StaffShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="Store"
          list={StoreList}
          edit={StoreEdit}
          create={StoreCreate}
          show={StoreShow}
        />
      </Admin>
    </div>
  );
};

export default App;
