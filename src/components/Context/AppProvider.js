import React from 'react';
import { AuthContext } from './AuthProvider';
import useFireStore from '../../hooks/useFireStore';

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [isAddRoomVisible, setIsAddRoomVisible] = React.useState(false);

  const {
    user: { uid }
  } = React.useContext(AuthContext);
  /**
   * {
   * name: 'room name'
   * description: 'mo ta'
   * members: [uid1, uid2]
   * }
   *
   *
   */

  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: 'members',
      operator: 'array-contains',
      compareValue: uid
    };
  }, [uid]);
  const rooms = useFireStore('rooms', roomsCondition);

  // console.log({ rooms });

  return (
    <AppContext.Provider
      value={{ rooms, isAddRoomVisible, setIsAddRoomVisible }}
    >
      {children}
    </AppContext.Provider>
  );
}
