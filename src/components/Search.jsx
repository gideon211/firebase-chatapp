import React, { useContext, useState } from 'react';
import { collection, query, where, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from '../firebase';
import ProImg from '../img/imageprofile.jpg';
import { AuthContext } from '../context/AuthContext';

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  // Search for user by displayName
  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", username));
    try {
      const querySnapshot = await getDocs(q);
      let found = false;

      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        found = true;
        console.log(doc.id, " => ", doc.data());
      });

      if (!found) {
        setErr(true);
        setUser(null);
      } else {
        setErr(false);
      }
    } catch (error) {
      console.log(error);
      setErr(true);
      setUser(null);
    }
  };

  // Search on Enter key
  const handleKey = (e) => {
    if (e.code === "Enter") handleSearch();
  };

  // Initiate chat with selected user
  const handleSelect = async () => {
    if (!user) return;

    const combinedId = currentUser.uid > user.uid 
      ? currentUser.uid + user.uid 
      : user.uid + currentUser.uid;

    try {
      const chatRef = doc(db, "chats", combinedId);
      const chatSnap = await getDoc(chatRef);

      // If chat does not exist, create it
      if (!chatSnap.exists()) {
        await setDoc(chatRef, { messages: [] });
      }

      // Here you could also update userChats if you have a structure for that
      console.log("Chat ready with:", user.displayName);

      // Optionally, reset search input
      setUser(null);
      setUsername("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mt-4'>
      <div>
        <input
          type="text"
          placeholder="Find a user"
          className='bg-transparent placeholder:text-gray-300 text-gray-600 focus:text-gray-300 outline-none border-b border-gray-400 w-full p-2'
          onKeyDown={handleKey}
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
      </div>

      {err && <span className="text-red-500">User not found!</span>}

      {user &&
        <div
          className="flex items-center gap-2 text-white cursor-pointer hover:bg-[#2f2d52] p-2"
          onClick={handleSelect}
        >
          <img
            src={user.photoURL || ProImg}
            alt=""
            className='w-[50px] h-[50px] rounded-full object-cover'
            onError={(e) => e.currentTarget.src = ProImg}
          />
          <div>
            <span>{user.displayName}</span>
          </div>
        </div>
      }
    </div>
  );
};

export default Search;
