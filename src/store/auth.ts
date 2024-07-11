import { defineStore } from "pinia";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs, QuerySnapshot, query, where } from "firebase/firestore";
import IUser from '@/interfaces/IUser';

export const useAuthStore = defineStore(
    "auth",
    {
        state: () => {
            const auth = getAuth();
            const db = getFirestore();
            const isAuthenticated = false;

            return { auth, db, isAuthenticated }
        },
        getters: {

        },
        actions: {
            register(name:string, lastName:string, email:string, password:string, username:string) {
                // Llamada para crear un usuario en firebase
                createUserWithEmailAndPassword(this.auth, email, password)
                    .then(
                        (userCredential) => {
                            return setDoc(
                                doc(this.db, "users", userCredential.user.uid),
                                {
                                    name: name,
                                    lastName: lastName,
                                    username: username
                                }
                            )
                        }
                    )
                    .then(
                        /*
                        () => {
                            alert("Registrado correctamente");
                        }*/
                    )
                    .catch(
                        (error) => {
                            alert(error.message);
                        }
                    )
            },
            login(email:string, password:string) {
                signInWithEmailAndPassword(this.auth, email, password)
                    .then(
                        // POR AHORA NO EJECUTAMOS NADA
                        /*
                        (userCredential) => {
                            //const user = userCredential.user;
                            // COMO ES UNA Promise<string> HAY QUE VOLVER A HACER OTRO then
                            //return user.getIdToken();
                            alert("Usuario autenticado 1")
                        }*/
                    )
                    .catch(
                        (error) => {
                            alert("Error: " + error.message);
                        }
                    )
            },
            changeAuthState(value:boolean){
                this.isAuthenticated = value;
            },
            async getAccountInfo():Promise<IUser> {
                // Este metodo no se puede ejecutar si el usuario no esta autenticado, por tanto currentUser nunca va a ser null
                const currentUser = this.auth.currentUser;
                let user:IUser = {};

                if(currentUser != null) {
                    try {
                        // Recuperamos de la Promise, el docSnapshot
                        const docSnapshot = await getDoc(doc(this.db, "users", currentUser.uid));
                        if(docSnapshot.exists()) {
                            user = {
                                uid: currentUser.uid,
                                email: currentUser.email!,
                                name: docSnapshot.data().name,
                                lastName: docSnapshot.data().lastName,
                                username: docSnapshot.data().username
                            }
                            return user;
                        }else{
                            alert("Desde el getAccountInfo: No existe ese usuario ");
                            return user;
                        }
                    } catch (error) {
                        alert("Desde el getAccountInfo " + error);
                        return user;
                    }
                }else{
                    console.log("Desde el getAccountInfo: sin currentUser");
                    return user;
                }
            },
            async createPost(title:string, category:string, content:string):Promise<boolean> {
                // Este metodo no se puede ejecutar si el usuario no esta autenticado, por tanto currentUser nunca va a ser null
                const currentUser = this.auth.currentUser;

                if(currentUser != null){
                    try {
                        const docSnapshot = await getDoc(doc(this.db, "users", currentUser.uid));

                        if(docSnapshot.exists()) {
                            await setDoc(
                                doc(collection(this.db, "posts")),
                                {
                                    title: title,
                                    category: category,
                                    content: content,
                                    userUid: currentUser.uid,
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
                const querySnapshot = await getDocs(collection(this.db, "posts"));
                return querySnapshot;
            },
            async fetchMyPosts():Promise<QuerySnapshot> {
                const currentUser = this.auth.currentUser;
                const querySnapshot = await getDocs(query(collection(this.db, "posts"), where("userUid", "==", currentUser?.uid)));
                return querySnapshot;
            }
        }
    }
)