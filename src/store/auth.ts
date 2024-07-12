import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, User } from "firebase/auth";
import { doc, setDoc, getDoc, collection, getDocs, QuerySnapshot, query, where } from "firebase/firestore";
import IUser from '@/interfaces/IUser';
import { auth, db } from '../firebase';

export const useAuthStore = defineStore(
    "auth",
    {
        state: () => ({
            user:null as User | null,
        }),
        getters: {
            isAuthenticated: (state) => !!state.user
        },
        actions: {
            async fetchUser() {
                return new Promise<void>((resolve) => {
                    onAuthStateChanged(auth, (user) => {
                        this.user = user;
                        if(this.user == null) {
                            // Actualizamos el local storage (por si el usuario refresca la pagina)
                            localStorage.setItem("isAuthenticated", "false");
                        }else{
                            // Actualizamos el local storage (por si el usuario refresca la pagina)
                            localStorage.setItem("isAuthenticated", "true");
                        }
                        resolve();
                    });
                });
            },
            register(name:string, lastName:string, email:string, password:string, username:string) {
                // Llamada para crear un usuario en firebase
                createUserWithEmailAndPassword(auth, email, password)
                    .then(
                        (userCredential) => {
                            return setDoc(
                                doc(db, "users", userCredential.user.uid),
                                {
                                    name: name,
                                    lastName: lastName,
                                    username: username
                                }
                            )
                        }
                    )
                    .then(
                        //TODO: Un modal que indique el usuario se registro correctamente 
                    )
                    .catch(
                        (error) => {
                            alert(error.message);
                        }
                    )
            },
            login(email:string, password:string) {
                signInWithEmailAndPassword(auth, email, password)
                    .then(
                        //TODO: Un modal que indique el usuario se autentico correctamente 
                    )
                    .catch(
                        (error) => {
                            alert("Error: " + error.message);
                        }
                    )
            },
            async getAccountInfo():Promise<IUser> {
                // Este metodo no se puede ejecutar si el usuario no esta autenticado, por tanto this.user nunca va a ser null

                let user:IUser = {};

                if(this.user != null) {
                    try {
                        // Recuperamos de la Promise, el docSnapshot
                        console.log("Desde el getAccountInfo: con currentUser");
                        const docSnapshot = await getDoc(doc(db, "users", this.user.uid));
                        if(docSnapshot.exists()) {
                            user = {
                                uid: this.user.uid,
                                email: this.user.email!,
                                name: docSnapshot.data().name,
                                lastName: docSnapshot.data().lastName,
                                username: docSnapshot.data().username
                            }
                            return user;
                        }else{
                            console.log("Desde el getAccountInfo: No existe ese usuario ");
                            return user;
                        }
                    } catch (error) {
                        console.log("Desde el getAccountInfo " + error);
                        return user;
                    }
                }else{
                    console.log("Desde el getAccountInfo: sin currentUser");
                    return user;
                }
            },
            async createPost(title:string, category:string, content:string):Promise<boolean> {
                // Este metodo no se puede ejecutar si el usuario no esta autenticado, por tanto this.user nunca va a ser null

                if(this.user != null){
                    try {
                        const docSnapshot = await getDoc(doc(db, "users", this.user.uid));

                        if(docSnapshot.exists()) {
                            await setDoc(
                                doc(collection(db, "posts")),
                                {
                                    title: title,
                                    category: category,
                                    content: content,
                                    userUid: this.user.uid,
                                    username: docSnapshot.data().username
                                }
                            );
                            return true;
                        }else{
                            alert("Desde el getAccountInfo: No existe ese usuario ");
                            return false;
                        }
                    } catch (error) {
                        alert("Desde el createPost " + error);
                        return false;
                    }
                }else{
                    return false;
                }
            },
            async fetchAllPosts():Promise<QuerySnapshot> {
                const querySnapshot = await getDocs(collection(db, "posts"));
                return querySnapshot;
            },
            async fetchMyPosts():Promise<QuerySnapshot> {
                const currentUser = auth.currentUser;
                const querySnapshot = await getDocs(query(collection(db, "posts"), where("userUid", "==", currentUser?.uid)));
                return querySnapshot;
            }
        }
    }
)