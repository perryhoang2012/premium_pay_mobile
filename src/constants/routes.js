import {AppIcon} from '~assets/svg';

const WALLET = {
  id: 1,
  title: 'Wallet',
  icon: AppIcon.iconWalletBlue,
  value: 'wallet',
  route: 'HomeScreen',
};

const ADDRESS_BOOK = {
  id: 2,
  title: 'Address Book',
  icon: AppIcon.iconAddressBook,
  value: 'address_book',
  route: 'AddressedScreen',
};

const TRANSACTION_HISTORY = {
  id: 3,
  title: 'Transactions History',
  icon: AppIcon.iconRepeater,
  value: 'transaction_history',
  route: 'TransactionHistoryScreen',
};

const FAC_BROWSER = {
  id: 4,
  title: 'FAC Browser',
  icon: AppIcon.iconBrowser,
  value: 'fac_browser',
  route: 'FacBrowserScreen',
};

const NOTIFICATION = {
  id: 5,
  title: 'Notifications',
  icon: AppIcon.iconNotification,
  value: 'notification',
  route: 'NotificationScreen',
};
const UTXO = {
  id: 6,
  title: 'UTXO',
  icon: AppIcon.iconUTXO,
  value: 'utxo',
  route: 'UTXOScreen',
};

const DOCUMENTATION = {
  id: 6,
  title: 'Documentation',
  icon: AppIcon.iconDocument,
  value: 'documentation',
};

const SETTING = {
  id: 7,
  title: 'Setting',
  icon: AppIcon.iconSetting,
  value: 'setting',
  route: 'SettingScreen',
};
let routesTop = [WALLET, ADDRESS_BOOK, TRANSACTION_HISTORY, FAC_BROWSER];

let routesBottom = [NOTIFICATION, DOCUMENTATION, SETTING];

export default {routesTop, routesBottom};
