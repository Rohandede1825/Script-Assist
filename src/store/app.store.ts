import { create } from 'zustand';


interface User {
    email: string,
}

interface Auth{
    user: User | null,
    login:(userData:User)=>void,
    logout:()=>void;
}


export const useAppStore = create<Auth>((set) => ({
        user: JSON.parse(localStorage.getItem('user') || 'null'),
        login:(userData)=>{
            localStorage.setItem('user', JSON.stringify(userData));
            set({user:userData});
        },
        logout:()=>{
            localStorage.removeItem('user');
            set({user : null});
        }
}));



