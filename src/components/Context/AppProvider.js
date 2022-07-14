import React from 'react';
import { AuthContext } from './AuthProvider';
import useFireStore from '../../hooks/useFireStore';

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [isAddRoomVisible, setIsAddRoomVisible] = React.useState(false);
  const [isInviteMemberVisible, setIsInviteMemberVisible] =
    React.useState(false);
  const [selectedRoomId, setSelectedRoomId] = React.useState('');

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

  const selectedRoom = React.useMemo(
    () => rooms.find((room) => room.id === selectedRoomId || {}),
    [rooms, selectedRoomId]
  );

  const usersCondition = React.useMemo(() => {
    return {
      fieldName: 'uid',
      operator: 'in',
      compareValue: selectedRoom?.members
    };
  }, [selectedRoom?.members]);

  const members = useFireStore('users', usersCondition);

  console.log({ members });

  // console.log({ rooms });

  return (
    <AppContext.Provider
      value={{
        rooms,
        members,
        selectedRoom,
        isAddRoomVisible,
        setIsAddRoomVisible,
        selectedRoomId,
        setSelectedRoomId
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
