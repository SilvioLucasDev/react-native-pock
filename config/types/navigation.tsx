export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Restore: undefined;
};

export type ProtectedStackParamList = {
  ChooseRoles: undefined;
  Notification: undefined;
  AppRoutes: { screen: string };
  AcademyRoutes: { screen: string };
};

export type AppTabParamList = {
  Academy: undefined;
  Home: undefined;
  Perfil: undefined;
};

export type AcademyTabParamList = {
  Evolution: undefined;
  Home: undefined;
  Perfil: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthStackParamList,
        ProtectedStackParamList,
        AppTabParamList,
        AcademyTabParamList {}
  }
}
