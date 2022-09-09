import {AppIcon} from '~assets/svg';

const WALLET = {
  id: 1,
  title: 'Wallet',
  icon: AppIcon.iconWalletBlue,
  value: 'wallet',
  route: 'HomeScreen',
};

const ADDRESS_BOOK = {
  id: 1,
  title: 'Address Book',
  icon: AppIcon.iconAddressBook,
  value: 'address_book',
  route: 'AddressedScreen',
};

const NOTIFICATION = {
  id: 1,
  title: 'Notifications',
  icon: AppIcon.iconNotification,
  value: 'notification',
};
const UTXO = {
  id: 1,
  title: 'UTXO',
  icon: AppIcon.iconUTXO,
  value: 'utxo',
  route: 'UTXOScreen',
};
const SETTING = {
  id: 1,
  title: 'Setting',
  icon: AppIcon.iconSetting,
  value: 'setting',
  route: 'SettingScreen',
};

let routes = [WALLET, ADDRESS_BOOK, NOTIFICATION, UTXO, SETTING];

export default routes;
