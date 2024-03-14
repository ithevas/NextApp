import axios from "axios";
import { atom } from "recoil";

const userAtom = atom<boolean | null>({
  key: "userAtom",
  default: null,
});

const dataAtom = atom({
    key: "dataAtom",
    default: (async()=>{
        await axios.get("http://localhost:3000/api/user")
    })
})

export { userAtom };
